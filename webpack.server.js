const path = require('path')

module.exports = {
  mode: 'development',
  entry: './server/index.js',
  output: {
    filename: 'server.js',
    path: path.resolve('build')
  },
  target: 'node',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
