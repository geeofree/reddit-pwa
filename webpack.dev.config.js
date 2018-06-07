const webpack = require('webpack')
const path = require('path')

const pubPath = path.resolve(__dirname, 'public')
const WebpackHMR = new webpack.HotModuleReplacementPlugin()

module.exports = {
  devtool: 'inline-source-map',

  output: {
    filename: 'static/js/[name].[hash].js'
  },

  devServer: {
    hot: true,
    port: 3000,
    contentBase: pubPath,
    stats: 'errors-only',
    historyApiFallback: true
  },

  plugins: [WebpackHMR]
}
