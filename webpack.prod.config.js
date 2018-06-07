module.exports = {
  devtool: 'source-map',

  output: {
    filename: 'static/js/[name]-chunk.[chunkhash:8].js',
    chunkFilename: 'static/js/[name]-chunk.[chunkhash:8].js'
  },

  optimization: {
    splitChunks: {
      chunks: 'all'
    },

    runtimeChunk: true
  }
}
