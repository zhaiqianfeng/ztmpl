var dirVars = require('./common/dir-vars.config.js');

const moduleConfig = require('./common/module.config.js');


moduleConfig.rules.push({
    test: /\.less$/,
    include: dirVars.srcRootDir,
    use: [
        'style-loader',
        'css-loader',
        'less-loader',
    ],
});

module.exports = moduleConfig;