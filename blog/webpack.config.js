var path = require('path');

const config = {
    entry: require('./webpack-config/entry.config.js'),
    output: require('./webpack-config/output.config.js'),
    module: require('./webpack-config/module.config.js'),
    plugins: require('./webpack-config/plugins.config.js'),
    resolve: require('./webpack-config/resolve.config.js'),
    devServer: require('./webpack-config/devServer.config.js'),
}

module.exports = config;