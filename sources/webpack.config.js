module.exports = {
  entry: './src/app.js', // 先頭に./つける

  output: {
    path: __dirname + '/dist', // 絶対パス
    filename: 'bundle.js'
  },

  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
