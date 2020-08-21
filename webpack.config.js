var HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js'
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'My App', //设置html 的title
    template: 'src/assets/index.html' //根据这个地址的html 来生成打包好的新html
  })],
  module: {
    rules: [
      {
        //如果发现了任何一个以.css结尾的文件名，那么就用css-loader 去处理这个文件，css-loader是把css读进js，style-loader就是把css-loader 变成style标签放入到header里
        test: /\.css$/i,//test 匹配哪些文件
        use: ['style-loader', 'css-loader'],//使用哪些loader
      },
    ],
  },
}

