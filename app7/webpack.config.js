var path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/index'
  ],
  output: {
      publicPath: './public',
      path: './public/javascripts',
      filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        exclude: [ path.resolve(__dirname, "node_modules") ],
        loader: 'babel-loader',
        query: {          
          presets: ['es2015'],
          plugins: ['transform-runtime'], 
        }
      }
    ]
  },
  debug: true
};