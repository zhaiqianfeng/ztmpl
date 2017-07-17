var dirVars = require('./dir-vars.config.js');
module.exports = {
    rules: [
        {
            test: /\.js$/,
            //exclude: /node_modules/,
            include: dirVars.srcDir,
            loader: 'babel-loader',
            options: {
                presets: [['es2015', { loose: true }]],
                cacheDirectory: true,
                plugins: ['transform-runtime'],
            },
        },
        {
            test: /\.art$/,
            //exclude: /node_modules/,
            include: dirVars.srcDir,
            loader: "art-template-loader",
            options: {
                // art-template options (if necessary)
                // @see https://github.com/aui/art-template
            }
        },
        {
            // 图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
            // 如下配置，将小于8192byte的图片转成base64码
            test: /\.(png|jpg|gif)$/,
            include: dirVars.srcDir,
            // loader: 'url-loader?limit=8192&name=./static/img/[hash].[ext]',
            loader: 'url-loader',
            options: {
                limit: 8192,
                name: 'static/imgs/[hash].[ext]',
            },
        },
        {
            // 专供iconfont方案使用的，后面会带一串时间戳，需要特别匹配到
            test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
            include: dirVars.srcDir,
            // exclude: /glyphicons/,
            // loader: 'file-loader?name=static/fonts/[name].[ext]',
            loader: 'file-loader',
            options: {
                name: 'static/fonts/[name].[ext]',
            },
        },
    ],
};