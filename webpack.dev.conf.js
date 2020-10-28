const webpack = require(`webpack`);
const baseWebpackConfig = require(`./webpack.base.conf.js`);

const merge = require(`webpack-merge`);

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: `development`,
  devtool: `cheap-module-eval-source-map`,
  devServer: {
    port: 8081,
    contentBase: baseWebpackConfig.externals.paths.build,
    host: '0.0.0.0',
    useLocalIp: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: `[file].map`
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
})


