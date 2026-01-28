const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: ["./_src/js/main.js", "./_src/scss/main.scss"],
  },
  output: {
    path: path.resolve(__dirname, "assets"),
    filename: "js/[name].js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                quietDeps: true,
                silenceDeprecations: ["legacy-js-api"],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
  ],
};
