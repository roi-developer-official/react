const HtmlPlugn = require("html-webpack-plugin");
const MiniCssPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
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
        test: /\.css$/i,
        use: [MiniCssPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlPlugn({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new MiniCssPlugin()
  ],
  resolve: {
    extensions: [".jsx", ".js"],
    alias: {
      Contexts: path.resolve(__dirname, 'src/contexts')
    }
  },

  devServer: {
      historyApiFallback: true,
      port: 3000
  }
};
