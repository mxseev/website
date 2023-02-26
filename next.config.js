/* eslint-disable @typescript-eslint/no-var-requires */

const {withAxiom} = require("next-axiom")
const bundleAnalyzer = require("@next/bundle-analyzer")
const {withSentryConfig} = require("@sentry/nextjs")

const sentryWebpackPluginConfig = {
  silent: true
}

const bundleAnalyzerConfig = {
  enabled: process.env.ANALYZE === "true"
}

/** @type {import('next').NextConfig} */
const config = {
  output: "standalone",
  experimental: {
    appDir: true
  },
  sentry: {
    hideSourceMaps: true,
    disableServerWebpackPlugin: true,
    disableClientWebpackPlugin: true,
  }
}

const withBundleAnalyzer = bundleAnalyzer(bundleAnalyzerConfig)

module.exports = withSentryConfig(withBundleAnalyzer(withAxiom(config)), sentryWebpackPluginConfig)
