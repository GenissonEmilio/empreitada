/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: { qualities: [75, 85] },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "empreitada.vercel.app" }],
        destination: "https://empreitada.net.br/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};
export default nextConfig;
