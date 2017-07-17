var path = require('path');
var dirVars = require('./common/dir-vars.config.js');
var pageArr = require('./common/entries.config.js');
var configEntry = {};

pageArr.forEach((page) => {
    configEntry[page] = path.resolve(dirVars.pagesDir, page+"/page");
});

module.exports = configEntry;