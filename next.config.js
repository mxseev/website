/* eslint-disable @typescript-eslint/no-var-requires */

const withBundleAnalyzer = require("@next/bundle-analyzer")

const bundleAnalyzerConfig = {
  enabled: process.env.ANALYZE === "true"
}

/** @type {import('next').NextConfig} */
const config = {
  output: "standalone",
  experimental: {
    appDir: true
  }
}

module.exports = withBundleAnalyzer(bundleAnalyzerConfig)(config)
