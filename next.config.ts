// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   transpilePackages: ["three"],
//   /* config options here */
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["three"],
  eslint: {
    // Ignore ESLint errors during production builds on Vercel
    ignoreDuringBuilds: true,
  },
  /* other config options here */
};

export default nextConfig;
