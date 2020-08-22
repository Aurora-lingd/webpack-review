const base = require('./webpack.config.base')
module.exports = {
  ...base,
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  mode: 'development',
  module: {
    rules: [
      ...base.module.rules,
      {
        //如果发现了任何一个以.css结尾的文件名，那么就用css-loader 去处理这个文件，css-loader是把css读进js，style-loader就是把css-loader 变成style标签放入到header里
        test: /\.css$/i,//test 匹配哪些文件
        use: ["style-loader", "css-loader"],
      },
    ],
  },
}

