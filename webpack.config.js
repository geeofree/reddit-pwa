const path = require('path')
const merge = require('webpack-merge')
const HtmlPlugin = require('html-webpack-plugin')

const devConfig = require('./webpack.dev.config.js')
const prodConfig = require('./webpack.prod.config.js')

const srcPath = path.resolve(__dirname, 'src')
const pubPath = path.resolve(__dirname, 'public')
const env = process.env.NODE_ENV

const mainConfig = {
  mode: env,

  output: {
    path: pubPath
  },

  resolve: {
    modules: [srcPath, 'node_modules']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },

  plugins: [
    new HtmlPlugin({
      inject: true,
      filename: 'index.html',
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    })
  ]
}

if (env === 'production') {
  module.exports = merge(mainConfig, prodConfig)
} else {
  module.exports = merge(mainConfig, devConfig)
}
