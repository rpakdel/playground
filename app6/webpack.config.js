module.exports = {
  entry: './index.js',
  output: { path: 'public', filename: 'bundle.js' },
  //debug: true,
  //devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: './components/',
        query: { 
          presets: ['es2015'],
          plugins: ['lodash', 'transform-runtime', 'transform-es2015-modules-umd'] 
        },
      },
      {
        test: /\.less$/,
        loaders: [
          'style',
          'css',
          'less'
        ]
      }
    ]
  }
}