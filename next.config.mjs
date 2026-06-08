/** @type {import('next').NextConfig} */
const nextConfig = {
  // Two lockfiles exist (one in the parent dir, one here), so Next.js
  // would otherwise infer the wrong workspace root and fail to resolve
  // the React Client Manifest. Pin the root to this project directory.
  turbopack: {
    root: import.meta.dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
