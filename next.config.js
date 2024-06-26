const withBuilderDevTools = require("@builder.io/dev-tools/next")();

/** @type {import('next').NextConfig} */
const nextConfig = withBuilderDevTools({
  reactStrictMode: true,
  swcMinify: true,
});

module.exports = nextConfig;
