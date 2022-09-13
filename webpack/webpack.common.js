const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.tsx"),
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "..", "./build"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./public/index.html"),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "..", "./public/assets"),
          to: path.resolve(__dirname, "..", "./build/assets"),
          context: "public",
        },
      ],
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
};
