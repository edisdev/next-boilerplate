const JsConfigPathsPlugin = require('jsconfig-paths-webpack-plugin');
const path = require('path');

let jsconfig = new JsConfigPathsPlugin()

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/**/stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "~@/*": ["./src/assets/stylesheets/*"]
    }
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        include: path.resolve(__dirname, './'),
        use: [
          {
            loader: 'file-loader',
          },
        ]
      });


    config.resolve = {
      plugins: [
        jsconfig
      ]
    }

    // Return the altered config
    return config;
  }
}