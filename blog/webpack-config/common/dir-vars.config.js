var path=require('path');
var dirConfig={};

dirConfig.rootDir = path.resolve(__dirname, '../../');
dirConfig.srcDir = path.resolve(dirConfig.rootDir, './src');
dirConfig.pagesDir = path.resolve(dirConfig.srcDir, './pages');
dirConfig.layoutDir = path.resolve(dirConfig.srcDir, './layout');
dirConfig.shareDir = path.resolve(dirConfig.srcDir, './share');

dirConfig.buildDir = path.resolve(dirConfig.rootDir, './build');

module.exports = dirConfig;