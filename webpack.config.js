const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry:{
        app:"./src/index.js"
    },
    output:{
        path:__dirname,
        filename:"./dist/[name].js"
    },
    plugins:[
        new HtmlWebpackPlugin({title:"Webpack Demo"})
    ]
}