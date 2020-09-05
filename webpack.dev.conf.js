const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devServer: {
        overlay: true,
        port: 8081
    }
});

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig)
})