module.exports = {
  mode: "development",
  entry: './index.ts',
  output: {
    path: '/dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}
