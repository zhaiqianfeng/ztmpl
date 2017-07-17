const render = require('./content.art');

const data = {
    title: '首页'
};
const html = render(data);

module.exports = html;