var dirVars = require('./common/dir-vars.config.js');

const moduleConfig = require('./common/module.config.js');


moduleConfig.rules.push({
    test: /\.css$/,
    include: dirVars.srcRootDir,
    use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
    ],
});

module.exports = moduleConfig;