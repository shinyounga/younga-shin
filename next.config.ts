import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/younga-shin" : "",
  assetPrefix: isProd ? "/younga-shin/" : "",
  images: { unoptimized: true },
};

export default nextConfig;
