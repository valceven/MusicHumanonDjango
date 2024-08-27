const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/, // Add this rule to handle CSS files
        use: [
          "style-loader", // Injects CSS into the DOM
          "css-loader", // Interprets `@import` and `url()` like `import/require()`
        ],
      },
    ],
  },
  optimization: {
    minimize: process.env.NODE_ENV === "production",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      ),
    }),
  ],
  stats: {
    errorDetails: true,
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
};
