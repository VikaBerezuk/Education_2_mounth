const math = require("mathjs");

function addListener(id, eventType, callback) {
    const node = document.getElementById(id);
    if (node) {
        node.addEventListener(eventType, callback);
    }
}

function getElementId(id) {
    const node = document.getElementById(id);
    if(node) {
        return node;
    }
    return false;
}

function addLength(id, number) {
    const node = id.textContent[id.textContent.length - number];
    return node;
}

function getReplace(id, getSumbol) {
    const node = id.value.toString().replace(getSumbol, '');
    return node;
}

function getIncludes(id, arg) {
    const node = id.textContent.includes(arg)
    return node;
}

function deleteLastElements(id) {
    const node = id.value.substring(0, id.value.length - 1);
    return node;
}

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

function equality() {
    const calculator = getElementId('calculatorValue');
    calculator.value = math.evaluate(calculator.value); //eval
}

function changeCalc() {
    const engineering = document.getElementsByClassName('engineering');

    for (let i = 0; i < engineering.length; i++) {
        if( engineering[i].style.display === 'none') {
            engineering[i].style.display = ' table-cell';
        } else {
            engineering[i].style.display = 'none';
        }
    }
}

module.exports = {addListener, getElementId, addLength, getReplace, getIncludes, deleteLastElements, factorial,
    equality, changeCalc};
