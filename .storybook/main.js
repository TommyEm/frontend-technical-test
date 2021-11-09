const path = require("path")

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-css-modules-preset'
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      "@styles": path.resolve(__dirname, "..", "src", "styles"),
      "@/assets": path.resolve(__dirname, "..", "src", "assets"),
      "@/components": path.resolve(__dirname, "..", "src", "components"),
      "@/constants": path.resolve(__dirname, "..", "src", "constants"),
      "@/design-tokens": path.resolve(__dirname, "..", "src", "design-tokens", "build"),
      "@/hooks": path.resolve(__dirname, "..", "src", "hooks"),
      "@/pages": path.resolve(__dirname, "..", "src", "pages"),
      "@/types": path.resolve(__dirname, "..", "src", "types"),
      "@/store": path.resolve(__dirname, "..", "src", "store"),
      "@/styles": path.resolve(__dirname, "..", "src", "styles"),
    }

    // Return the altered config
    return config;
  },
}