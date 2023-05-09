/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */

// import("./src/env.mjs");
// import { withContentlayer } from "next-contentlayer";

// /** @type {import("next").NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   /**
//    * If you have `experimental: { appDir: true }` set, then you must comment the below `i18n` config
//    * out.
//    *
//    * @see https://github.com/vercel/next.js/issues/41980
//    */
//   // i18n: {
//   //   locales: ["en"],
//   //   defaultLocale: "en",
//   // },
// };
// export default withContentlayer(nextConfig);

import("./src/env.mjs");
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  // Optionally, add any other Next.js config below
};

module.exports = withContentlayer(nextConfig);
