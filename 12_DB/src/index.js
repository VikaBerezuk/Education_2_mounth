const { renderUI } = require('./logic');
const { checkDatabase } = require('./utils');

function init () {
    checkDatabase();
    renderUI();
    return true;
}
init();

module.exports = {init};