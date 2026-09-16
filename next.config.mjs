/** @type {import('next').NextConfig} */
const nextConfig = {
  // ── Static export ──────────────────────────────────────────────────────────
  // The site is deployed to SiteGround shared hosting (Apache/PHP, no Node), so
  // we export a fully static build. `next build` writes plain HTML/CSS/JS to the
  // `out/` folder, which is uploaded to public_html. The payment lock and the
  // contact form are handled by the PHP files in `public/` (guard.php,
  // license.php, contact.php) — see LICENSE-LOCK.md.
  output: "export",

  // Export each route as `route/index.html` (e.g. about/index.html). This makes
  // clean URLs work naturally on Apache and matches the PHP guard's file lookup.
  trailingSlash: true,

  // Two lockfiles exist (one in the parent dir, one here), so Next.js
  // would otherwise infer the wrong workspace root and fail to resolve
  // the React Client Manifest. Pin the root to this project directory.
  turbopack: {
    root: import.meta.dirname,
  },
  images: {
    // No image-optimization server exists on static hosting, so images are
    // served as-is. Required for `next/image` to work with `output: export`.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
