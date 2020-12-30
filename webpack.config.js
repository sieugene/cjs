const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

const isProd = process.env.NODE_ENV === "production";
const isDev = !isProd;

const filename = (ext) => (isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`);

const jsLoaders = () => {
  const loaders = ["babel-loader"];
  if (isDev) {
    loaders.push("eslint-loader");
  }
  return loaders;
};

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "src"),
  entry: ["./index.js", "webpack/hot/dev-server"],
  output: {
    filename: filename("js"),
    path: path.resolve(__dirname, "dist"),
  },
  devtool: isDev ? "source-map" : false,
  devServer: {
    contentBase: [
      path.resolve(__dirname, "src"),
      path.resolve(__dirname, "dist"),
    ],
    hot: true,
    port: 3000,
    inline: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: jsLoaders(),
        exclude: "/node_modules/",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "static/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "../static/index.html",
      minify: {
        removeComments: isProd,
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "static"),
          globOptions: {
            ignore: ["**/css/my.css", "**/js/my.js", "**/index.html"],
          },
          to: "static",
        },
      ],
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
    new MiniCssExtractPlugin({
      filename: filename("css"),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
