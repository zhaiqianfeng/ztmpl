var glob = require('glob');
var dirVars = require('./dir-vars.config.js');

var files=glob.sync('!(_)*/!(_)*', {cwd: dirVars.pagesDir});

module.exports = files;