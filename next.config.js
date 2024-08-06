const isProd = process.env.NODE_ENV === "production";

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra({
  output: 'export',
  assetPrefix: isProd ? "/<repository-name>/" : "",
  basePath: isProd ? "/<repository-name>" : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
});
