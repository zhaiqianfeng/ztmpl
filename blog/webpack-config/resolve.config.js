var path = require('path');
var dirVars = require('./common/dir-vars.config.js');
module.exports = {
    alias: {
        cssDir: path.resolve(dirVars.shareDir, 'css'),
        configDir: path.resolve(dirVars.srcDir, 'config'),
    },
    extensions: ['.js', '.css'],
};
