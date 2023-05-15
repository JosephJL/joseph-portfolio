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

// import("./src/env.mjs");
// const { withContentlayer } = require("next-contentlayer");

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
//   // Optionally, add any other Next.js config below
// };

// module.exports = withContentlayer(nextConfig);

import { withContentlayer } from "next-contentlayer";

/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function defineNextConfig(config) {
  return withContentlayer(config);
}

export default defineNextConfig({
  reactStrictMode: true,
  swcMinify: true,
  // Next.js i18n docs: https://nextjs.org/docs/advanced-features/i18n-routing
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
  pageExtensions: ["tsx", "ts", "mdx", "md"],
  webpack: (config) => {
    config.infrastructureLogging = {
      level: "error",
    };

    return config;
  },
});
