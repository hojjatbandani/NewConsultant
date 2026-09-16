# Payment Protection / License Lock (SiteGround / static export)

A **server-side, non-destructive** payment gate for this site, built to run on
**SiteGround shared hosting** (Apache + PHP, no Node.js). When the project
license is inactive, every page request is redirected to a professional
**Payment Required** page. It deletes nothing, collects no data, and is removable
in a few file deletions once the project is fully paid.

The site is built as a **Next.js static export** (`output: "export"`). `next build`
writes plain HTML/CSS/JS to `out/`, and a small set of PHP files enforce the lock
and handle the contact form on the server.

## Files

| File | Purpose |
| --- | --- |
| `public/guard.php` | Server-side gate. Every page request runs through it; serves the page when active, the lock page when locked. |
| `public/license.php` | The only file you edit to control the lock (status / expiry / grace). |
| `public/payment-required.html` | Self-contained lock page (inline CSS, no dependencies). |
| `public/contact.php` | PHP mail handler for the contact form (replaces the old Resend API). |
| `public/.htaccess` | Routes page requests to `guard.php`; serves assets and PHP handlers directly. |
| `next.config.mjs` | `output: "export"` + `trailingSlash` + unoptimized images. |

Everything in `public/` is copied into `out/` by `next build`, so the PHP files
ship alongside the exported site.

## How the lock works

1. `.htaccess` sends every **page** request to `guard.php`. Static assets
   (`/_next/*`, images, fonts, favicon, css, js) are served directly by Apache,
   and `contact.php` runs directly.
2. `guard.php` reads `license.php` **on the server** and decides if the site is
   locked. Because this is server-side PHP, it can't be bypassed from the browser.
3. **Active** → it reads the matching exported `.html` file and returns it.
   **Locked** → it returns `payment-required.html` with HTTP 402.
4. `license.php` is never exposed: `.htaccess` blocks direct requests to it, and
   PHP files are executed, never shown as source.

### Decision rules (top rule wins)

| # | Condition | Result |
| - | --- | --- |
| 1 | `status = 'suspended'` | **Locked now** (manual kill switch) |
| 2 | `status = 'active'`, empty `expires_at` | Works forever |
| 3 | Now is before `expires_at` | Works |
| 4 | Now within `expires_at` + `grace_days` | Works (grace) |
| 5 | Now after the grace window | **Locked** |

**Fail-safe:** if `license.php` is missing or broken, the site stays **unlocked** —
a config mistake can never take a paid site offline.

## Deploy to SiteGround

1. **Build locally:**
   ```bash
   npm run build
   ```
   This creates the `out/` folder (includes the PHP files and `.htaccess`).
2. **Upload the CONTENTS of `out/`** into `public_html` (Site Tools → File
   Manager, or FTP). Upload everything inside `out/`, including the hidden
   `.htaccess`.
3. **Create the sender email** for the contact form: Site Tools → Email → Email
   Accounts → create e.g. `noreply@hrz-stat.com`.
4. **Edit `public_html/contact.php`** and set `$TO` (where inquiries go) and
   `$FROM` (the address you just created).
5. Done. The lock and the contact form now run on the server.

To update the site later, run `npm run build` again and re-upload `out/`
(keep your edited `license.php` / `contact.php` values, or re-apply them).

## Controlling the lock

Edit **`public_html/license.php`** directly in SiteGround File Manager. Changes
are live on the next request — no rebuild, no restart.

```php
return array(
    'status'     => 'active',      // 'active' = dates decide; 'suspended' = lock now
    'expires_at' => '2026-09-17',  // YYYY-MM-DD, empty = never expires
    'grace_days' => 0,             // days after expiry before locking
    'project_id' => 'horizons-consulting',
);
```

- **Lock in one week (current setup):** `expires_at = '2026-09-17'`, `grace_days = 0`.
- **Lock immediately:** `status = 'suspended'`.
- **Unlock:** `status = 'active'` with a future or empty `expires_at`.

Because only someone with SiteGround access can edit this file, control stays
with you — that is the leverage.

## Testing

**Logic** (locally, with XAMPP PHP) — a truth-table test of the lock decision:
already verified with `8 passed, 0 failed`.

**On the server** — after uploading, edit `license.php` and reload the site:

| Set in `license.php` | Expected |
| --- | --- |
| `status='active'`, `expires_at='2999-01-01'` | Site works |
| `status='suspended'` | Payment Required page |
| `expires_at='2026-09-17'`, `grace_days=0` | Works until Sep 17, then locks |
| `expires_at` = a past date, `grace_days=0` | Payment Required page |

Note: the contact form's PHP handler only runs on the server (SiteGround), not
under `npm run dev`, so test the form on the live site.

## Removing the system after full payment

On the server (`public_html`), delete: `guard.php`, `license.php`,
`payment-required.html`, and remove the "LICENSE LOCK" block from `.htaccess`
(or delete `.htaccess` if it holds nothing else). The static site is then served
normally by Apache.

In the source repo, you can also delete the same four files from `public/`. Keep
`contact.php` if you still want the contact form.
