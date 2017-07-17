var dirVars = require('../common/dir-vars.config.js');
var pageArr = require('../common/entries.config.js');

var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var configPlugins = [
    /* 全局shimming */
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'window.$': 'jquery',
    }),
    /* 抽取出所有通用的部分 */
    new webpack.optimize.CommonsChunkPlugin({
        name: 'commons/commons',      // 需要注意的是，chunk的name不能相同！！！
        filename: '[name]/bundle.js',
        minChunks: 4,
    }),
];

pageArr.forEach((page) => {
    var htmlPlugin;
if(page=='home/index'){
    htmlPlugin = new HtmlWebpackPlugin({
        filename: `index.html`,
        template: path.resolve(dirVars.pagesDir, `./${page}/html.js`),
        chunks: [page, 'commons/commons'],
        hash: true, // 为静态资源生成hash值
        xhtml: true,
    });
}else{
    htmlPlugin = new HtmlWebpackPlugin({
        filename: `${page}.html`,
        template: path.resolve(dirVars.pagesDir, `./${page}/html.js`),
        chunks: [page, 'commons/commons'],
        hash: true, // 为静态资源生成hash值
        xhtml: true,
    });
}
configPlugins.push(htmlPlugin);
});

module.exports = configPlugins;