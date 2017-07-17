var dirVars = require('./common/dir-vars.config.js');
module.exports = {
    path: dirVars.buildDir,
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].bundle.js',
};