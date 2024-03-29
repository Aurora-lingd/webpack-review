var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App', //设置html 的title
      template: 'src/assets/index.html' //根据这个地址的html 来生成打包好的新html
    })
  ],
  module: {
    rules: [
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: ['file-loader',],
      // },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 500000,
            name: '[path][name].[ext]',
            outputPath: 'images/',
            publicPath: 'dist/'
          }
        }],
      },
    ],
  },
}

