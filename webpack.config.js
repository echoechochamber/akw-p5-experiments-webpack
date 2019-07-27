const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./sketch/sketch.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: "/node_modules/"
      }
    ]
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./build"
  },
  resolve: { extensions: [".tsx", ".ts", ".js"] },
  plugins: [
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development",
      template: "index.ejs"
    })
  ],
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, "build")
  }
};
