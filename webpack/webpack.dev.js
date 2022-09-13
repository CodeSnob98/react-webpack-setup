const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [new ReactRefreshWebpackPlugin(), new BundleAnalyzerPlugin({})],
};
