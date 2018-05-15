const merge = require("webpack-merge");
const parts = require("./webpack.part");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const commonConfig = merge([
  {
    plugins: [
      new HtmlWebpackPlugin({
        title: "Webpack Demo"
      })
    ],
    entry: {
      app: "./src/index.js"
    },
    output: {
      path: __dirname,
      filename: "./dist/[name].js"
    }
  },
  parts.loadCSS()
]);

const prodConfig = merge([]);

const devConfig = merge([
  parts.devServer({ host: process.env.HOST }, { port: process.env.PORT })
]);

module.exports = mode => {
    console.log(`MODE = ${mode}`);
  if (mode === "production") {
    console.log(merge(commonConfig, prodConfig, { mode }));
    return merge(commonConfig, prodConfig, { mode });
  } else {
    console.log(merge(commonConfig, devConfig, { mode }));
    return merge(commonConfig, devConfig, { mode });
  }
};
