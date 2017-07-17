var path = require('path');
var dirVars = require('./common/dir-vars.config.js');
module.exports = {
    alias: {
        lessDir: path.resolve(dirVars.shareDir, 'less'),
        configDir: path.resolve(dirVars.srcDir, 'config'),
    },
    extensions: ['.js', '.css', '.less'],
};