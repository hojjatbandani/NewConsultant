<?php
/**
 * ============================================================================
 *  CONTACT FORM  —  PHP mail handler (replaces the old Node /api/contact route)
 * ============================================================================
 *  The contact form (src/components/ContactPageContent.tsx) POSTs JSON here.
 *  Returns HTTP 200 on success, 4xx/5xx on failure (the front-end only checks
 *  res.ok). Runs on SiteGround's PHP/Apache.
 *
 *  EDIT THESE TWO VALUES:
 *    - $TO   : where inquiries are delivered.
 *    - $FROM : must be an address on YOUR domain (create it in SiteGround ->
 *              Email -> Email Accounts) or SiteGround may reject the mail.
 * ============================================================================
 */

$TO   = 'team@t4id.com';               // <-- where messages are delivered
$FROM = 'noreply@hrz-stat.com';        // <-- must exist on your domain

header('Content-Type: application/json; charset=utf-8');

// Only POST is allowed.
if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
    http_response_code(405);
    echo json_encode(array('error' => 'Method not allowed.'));
    exit;
}

// Read the JSON body the React form sends.
$raw  = file_get_contents('php://input');
$body = json_decode($raw, true);
if (!is_array($body)) {
    http_response_code(400);
    echo json_encode(array('error' => 'Invalid request body.'));
    exit;
}

$name    = trim((string) ($body['name'] ?? ''));
$email   = trim((string) ($body['email'] ?? ''));
$phone   = trim((string) ($body['phone'] ?? ''));
$subject = trim((string) ($body['subject'] ?? ''));
$message = trim((string) ($body['message'] ?? ''));

// Validation (mirrors the client; never trust the client).
if ($name === '' || $email === '' || $subject === '' || $message === '') {
    http_response_code(400);
    echo json_encode(array('error' => 'Missing required fields.'));
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(array('error' => 'Invalid email address.'));
    exit;
}
if (mb_strlen($message) > 5000) {
    http_response_code(400);
    echo json_encode(array('error' => 'Message is too long.'));
    exit;
}

/**
 * Strip CR/LF so a malicious value can't inject extra mail headers
 * (header-injection protection). Used for anything placed in a header.
 */
function no_headers($value)
{
    return trim(str_replace(array("\r", "\n", "%0a", "%0d"), '', $value));
}

$safeSubject   = no_headers($subject);
$safeReplyMail = no_headers($email);
$safeReplyName = no_headers($name);

$lines = array(
    'Name: ' . $name,
    'Email: ' . $email,
);
if ($phone !== '') {
    $lines[] = 'Phone: ' . $phone;
}
$lines[] = 'Subject: ' . $subject;
$lines[] = '';
$lines[] = $message;
$mailBody = implode("\n", $lines);

$headers  = 'From: Horizons Website <' . no_headers($FROM) . ">\r\n";
$headers .= 'Reply-To: ' . $safeReplyName . ' <' . $safeReplyMail . ">\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "MIME-Version: 1.0\r\n";

$ok = @mail($TO, 'New inquiry: ' . $safeSubject, $mailBody, $headers);

if ($ok) {
    echo json_encode(array('ok' => true));
} else {
    http_response_code(502);
    echo json_encode(array('error' => 'Failed to send message.'));
}
