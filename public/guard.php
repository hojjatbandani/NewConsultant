<?php
/**
 * ============================================================================
 *  PAYMENT PROTECTION / LICENSE LOCK  —  server-side gate (front controller)
 * ============================================================================
 *  Every PAGE request is routed here by .htaccess (static assets bypass it and
 *  are served directly by Apache). This runs on the server, so the lock cannot
 *  be bypassed from the browser.
 *
 *    - License active  -> read the matching exported .html file and output it.
 *    - License locked   -> output payment-required.html with HTTP 402.
 *
 *  It only ever opens files that live inside this folder and end in ".html",
 *  so it cannot leak license.php, .env, or anything outside the web root.
 *  To remove the whole system: delete guard.php, license.php, contact.php,
 *  payment-required.html and the LICENSE block in .htaccess.
 * ============================================================================
 */

$ROOT = __DIR__;

// ---------------------------------------------------------------------------
// 1) Load the license config (fail OPEN: a missing/broken config never locks a
//    paid site out).
// ---------------------------------------------------------------------------
$cfg = @include $ROOT . '/license.php';
if (!is_array($cfg)) {
    $cfg = array('status' => 'active', 'expires_at' => '', 'grace_days' => 7);
}

/**
 * Decide whether the site is currently locked.
 */
function license_is_locked($cfg)
{
    $status = strtolower(trim(isset($cfg['status']) ? $cfg['status'] : ''));

    // Rule 1 — manual kill switch.
    if (in_array($status, array('suspended', 'inactive', 'locked', 'off'), true)) {
        return true;
    }

    // Rule 2 — no expiry date -> works forever.
    $expires = trim(isset($cfg['expires_at']) ? $cfg['expires_at'] : '');
    if ($expires === '') {
        return false;
    }

    // Parse the expiry as the END of that day.
    $expiryTs = strtotime($expires . ' 23:59:59');
    if ($expiryTs === false) {
        return false; // invalid date -> fail open.
    }

    $graceDays = (int) (isset($cfg['grace_days']) ? $cfg['grace_days'] : 7);
    if ($graceDays < 0) {
        $graceDays = 0;
    }
    $lockAt = $expiryTs + $graceDays * 86400;

    // Rules 3-5 — locked only once we are past the grace window.
    return time() > $lockAt;
}

/**
 * Safely output an .html file that must live inside $ROOT. Returns false if the
 * file is missing or fails the safety checks (so the caller can fall back).
 */
function serve_html($file, $ROOT)
{
    $real = realpath($file);
    $base = realpath($ROOT);
    if ($real === false || $base === false) {
        return false;
    }
    // Must be inside the web root and must be an .html file.
    if (strpos($real, $base) !== 0) {
        return false;
    }
    if (substr(strtolower($real), -5) !== '.html') {
        return false;
    }
    header('Content-Type: text/html; charset=utf-8');
    header('Cache-Control: no-cache, no-store, must-revalidate');
    readfile($real);
    return true;
}

// ---------------------------------------------------------------------------
// 2) Locked -> show the payment-required page for ANY page request.
// ---------------------------------------------------------------------------
if (license_is_locked($cfg)) {
    http_response_code(402); // 402 Payment Required
    if (serve_html($ROOT . '/payment-required.html', $ROOT)) {
        exit;
    }
    // Minimal fallback if the file is missing.
    header('Content-Type: text/html; charset=utf-8');
    echo '<!doctype html><html lang="en"><head><meta charset="utf-8">'
        . '<meta name="robots" content="noindex"><title>Payment Required</title></head>'
        . '<body style="font-family:system-ui,sans-serif;background:#0a2b50;color:#fff;'
        . 'margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;'
        . 'text-align:center;padding:2rem"><div style="max-width:32rem"><h1>Payment Required</h1>'
        . '<p>This website is currently unavailable because the project license is inactive.</p>'
        . '<p>Please contact the project administrator to restore access.</p></div></body></html>';
    exit;
}

// ---------------------------------------------------------------------------
// 3) Active -> resolve the request path to an exported .html file and serve it.
// ---------------------------------------------------------------------------
$uri = isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : '/';
$path = parse_url($uri, PHP_URL_PATH);
$path = urldecode($path === null ? '/' : $path);

// Reject anything suspicious before touching the filesystem.
if (strpos($path, "\0") !== false || strpos($path, '..') !== false) {
    http_response_code(400);
    echo 'Bad request';
    exit;
}

$rel = trim($path, '/');

if ($rel === '') {
    // Homepage.
    if (serve_html($ROOT . '/index.html', $ROOT)) {
        exit;
    }
} else {
    // Try "about/index.html" then "about.html".
    if (serve_html($ROOT . '/' . $rel . '/index.html', $ROOT)) {
        exit;
    }
    if (serve_html($ROOT . '/' . $rel . '.html', $ROOT)) {
        exit;
    }
}

// ---------------------------------------------------------------------------
// 4) Nothing matched -> 404.
// ---------------------------------------------------------------------------
http_response_code(404);
if (serve_html($ROOT . '/404.html', $ROOT)) {
    exit;
}
echo 'Not found';
