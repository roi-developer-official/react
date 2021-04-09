const HtmlPlugin = require("html-webpack-plugin");
const MiniCssPlugin = require("mini-css-extract-plugin");
const path = require("path");
module.exports = {
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)/i,
        use: [{ loader: "file-loader" }],
      },
      {
        test: /\.css|s[ac]ss$/i,
        use: [MiniCssPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlPlugin({ filename: "index.html", template: "./src/index.html" }),
    new MiniCssPlugin(),
  ],
  resolve: {
    extensions: ['.jsx', '.js', 'json'],
  },
  //react router
  devServer: {
    historyApiFallback: true,
    port: 5000,
  },
};
