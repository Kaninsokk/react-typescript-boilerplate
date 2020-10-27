const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: ["./index.tsx"],
  devServer: {
    hot: true,
    port: "9000",
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, "dist", "index.html"),
      template: "./index.html",
    }),
  ],
};
