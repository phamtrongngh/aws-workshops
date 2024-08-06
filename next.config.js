const isProd = process.env.NODE_ENV === "production";

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra({
  output: 'export',
  assetPrefix: isProd ? "/aws-workshops/" : "",
  basePath: isProd ? "/aws-workshops" : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
});
