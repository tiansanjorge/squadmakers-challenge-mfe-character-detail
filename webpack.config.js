const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/main.tsx",
  mode: "development",
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  output: {
    publicPath: "auto",
    clean: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/inline",
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "detailApp",
      filename: "remoteEntry.js",
      exposes: {
        "./CharacterDetail": "./src/components/CharacterDetail.tsx",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: "^18.0.0",
          eager: true,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "^18.0.0",
          eager: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
