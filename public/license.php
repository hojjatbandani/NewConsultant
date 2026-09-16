<?php
/**
 * ============================================================================
 *  PAYMENT PROTECTION / LICENSE LOCK  —  configuration
 * ============================================================================
 *  This is the ONLY file you edit to control the lock. It lives on the server
 *  (public_html) and is only editable by someone with SiteGround access — that
 *  is your leverage. It is never exposed to the browser: direct requests are
 *  blocked by .htaccess, and PHP files are executed, never shown as source.
 *
 *  After editing, just save the file — the change is live on the next request.
 *  No rebuild or restart needed (unlike the old Node version).
 *
 *  ── How the values combine (top rule wins) ─────────────────────────────────
 *    1. status = "suspended"            -> locked immediately (manual switch).
 *    2. status = "active", no expiry    -> works forever.
 *    3. now is before expires_at        -> works (active).
 *    4. now within expiry + grace_days  -> still works (grace period).
 *    5. now after the grace window      -> LOCKED (payment-required page shown).
 * ============================================================================
 */

return array(
    // "active"  = let the dates below decide.
    // "suspended" = lock the site right now, ignoring the dates.
    'status' => 'active',

    // Expiry date, format YYYY-MM-DD (server timezone). Valid THROUGH this whole
    // day. Leave as an empty string ('') to keep the site on forever.
    'expires_at' => '2026-09-17',

    // Days the site keeps working AFTER the expiry date before it locks.
    'grace_days' => 0,

    // Free-text label for your own records. Not shown to visitors.
    'project_id' => 'horizons-consulting',
);
