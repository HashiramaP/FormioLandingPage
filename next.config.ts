import type { NextConfig } from "next";

const CONSOLE_ORIGIN = "https://console.formio.ca";

const CONSOLE_PATHS = [
  "/login",
  "/callback",
  "/welcome",
  "/dashboard",
  "/generateArrimaData",
  "/unsubscribed",
  "/privacy",
];

const CONSOLE_WILDCARD_PATHS = ["/dashboard", "/privacy"];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...CONSOLE_PATHS.map((path) => ({
        source: path,
        destination: `${CONSOLE_ORIGIN}${path}`,
        permanent: true,
      })),
      ...CONSOLE_WILDCARD_PATHS.map((path) => ({
        source: `${path}/:path*`,
        destination: `${CONSOLE_ORIGIN}${path}/:path*`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
