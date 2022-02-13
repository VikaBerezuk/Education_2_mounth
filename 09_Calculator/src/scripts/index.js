require('./../styles/index.scss');
const {getElementId, addLength, getReplace, getIncludes, deleteLastElements, factorial, addListener,
    changeCalc, equality
} = require("./utils");

function addValue(id, input) {
    const button = getElementId(id);
    const calculator = getElementId(input);

    if (calculator.value === '0' || calculator.value === null || calculator === '0'
        || calculator.value === '+0' || calculator.value === '-0' || calculator === '0'
    ) {
        calculator.value = button.innerText;
    } else {
        calculator.value = calculator.value + button.innerText;
    }
}

function addValueBracket(id, input) {
    const button = getElementId(id);
    let calculator = getElementId(input);

    const x = addLength(calculator, 1);
    if (x === '('  || x === ')') {
        const result = getReplace(calculator, `${x}`);
        calculator.value = result + button.innerText;
    } else {
        calculator.value += button.innerText;
    }
}

function changeValue(id) {
    const button = getElementId(id);
    const calculator = getElementId('calculatorValue');

    const x = addLength(calculator, 1);

    if (x === '-' || x === '+' || x === '*' || x === '/') {
        const result = getReplace(calculator, `${x}`);
        calculator.value = result + button.value;
    } else {
        calculator.value += button.value;
    }
}

function changePositiveToNegative(id) {
    const button = getElementId(id);
    const calculator = getElementId('calculatorValue');

    const x = addLength(calculator, 1);
    if (x === '-' || x === '+' || x === '*' || x === '/') {
        const result = getReplace(calculator, `${x}`);
        if ('+/-' === button.innerText && calculator.value >= '0' || '+/-' === button) {
            calculator.value = '-' + result;
        } else {
            calculator.value = getReplace(calculator, '-');
        }
    }

    if ('+/-' === button.innerText && calculator.value >= '0' || '+/-' === button) {
        calculator.value = '-' + calculator.value;
    } else {
        calculator.value = getReplace(calculator, '-');
    }
}

function pointValue() {
    const calculator = getElementId('calculatorValue');
    if (getIncludes(calculator, '.') !== '.') {
        calculator.value = calculator.value + '.';
    }
}

function cleaning() {
    const calculator = getElementId('calculatorValue');
    calculator.value = '0';
}

function back(input) {
    let calculator = getElementId(input);

    calculator.value =  deleteLastElements(calculator);
    if (!calculator.value) {
        calculator.value = "0";
    }
}

function pi(id) {
    const calculator = getElementId(id);
    calculator.value = Math.PI;
}

function getE(id) {
    const calculator = getElementId(id);
    calculator.value = Math.E;
}

function getExp(id) {
    const calculator = getElementId(id);
    calculator.value = Math.exp(calculator.value);
}

function mod(id) {
    const calculator = getElementId(id);
    calculator.value = calculator.value + "%";
}

//Факториал числа
function fact(input) {
    const calculator = getElementId(input);
    calculator.value = factorial(+eval(calculator.value));
}
//Логарифмы
function log(name, input) {
    const button = getElementId(name);
    const calculator = getElementId(input);

    if (button.textContent === 'log2' || button === 'log2') {
        calculator.value = Math.log2(eval(calculator.value)).toFixed(5); //log2
    } else if(button.textContent === 'log10' || button === 'log10') {
        calculator.value = Math.log10(eval(calculator.value)).toFixed(5); //log10
    } else if (button.textContent === 'ln' || button === 'ln') {
        calculator.value = Math.log(eval(calculator.value)).toFixed(5);//ln
    } else if(button.textContent === 'log1p' || button === 'log1p') {
        calculator.value = Math.log1p(eval(calculator.value)).toFixed(5);//log1p
    }
}

//степень
function degree(name, input) {
    const button = getElementId(name);
    const calculator = getElementId(input);

    if(button.textContent === 'xy' && name === 'degree' ||
        button === 'xy' && name === 'degree') {
        calculator.value = calculator.value + '**';
    } else if(button.textContent === 'ex' && name === 'degree' ||
        button === 'ex' && name === 'degree'){
        calculator.value = Math.exp(calculator.value);
    }

    if(name === 'degree1') {
        calculator.value =  1 / calculator.value;
    }

    if(name === 'degree2') {
        calculator.value = Math.pow(calculator.value, 2);
    }

    if(name === 'degree3') {
        calculator.value = Math.pow(calculator.value, 3);
    }

    if(button.textContent === '10x' || button === '10x') {
        calculator.value =  Math.pow(10, calculator.value);
    } else if(button.textContent === '2x' || button === '2x') {
        calculator.value =  Math.pow(2, calculator.value);
    }
}

function getModule(input) {
    const calculator = getElementId(input);
    calculator.value = Math.abs(calculator.value);
}

function changeButton() {
    const degree = getElementId('degree');//y/x  === ex
    const degree10 = getElementId('degree10');//10x === 2x
    const lg = getElementId('lg');//log === log2 10
    const ln = getElementId('ln');//ln === log1p

    if( ln.textContent === 'ln') {
        degree.innerHTML = 'e<sup>x</sup>';
        degree10.innerHTML = '2<sup>x</sup>';
        lg.innerHTML = 'log<sup>2</sup>';
        ln.innerHTML = 'log<sup>1p</sup>';
    } else {
        degree.innerHTML = 'x<sup>y</sup>';
        degree10.innerHTML = `10<sup>x</sup>`;
        lg.innerHTML = 'log<sup>10</sup>';
        ln.innerHTML = 'ln';
    }
}

function percent() {
    const node = getElementId("calculatorValue");
    if(node.value !== '0') {
        node.value = parseFloat(node.value)/100;
    }
}

function sqrt(context) {
    const node = getElementId("calculatorValue");
    if(node.value === '0' || node === '0') {
        node.value = context;
    } else {
        node.value += context;
    }
}

addListener('calculator', 'click', (event) => {
    if (event.target.id === 'equality') {
        equality('equality');
    } else if (event.target.id === 'changeCalc') {
        changeCalc();
    } else if (event.target.id === 'back') {
        back('calculatorValue');
    } else if (event.target.id === 'cleaning') {
        cleaning();
    } else if (event.target.id === 'point') {
        pointValue('point');
    } else if (event.target.id === 'plus' || event.target.id === 'minus' ||
        event.target.id === 'multiply' || event.target.id === 'division') {
        changeValue(event.target.id);
    } else if (event.target.id === 'change') {
        changePositiveToNegative('change');
    } else if (event.target.id === 'bracket-left' || event.target.id === 'bracket-right') {
        addValueBracket(event.target.id, 'calculatorValue');
    } else if (event.target.id === 'degree' || event.target.id === 'degree1' ||
        event.target.id === 'degree2' || event.target.id === 'degree3' || event.target.id === 'degree10') {
        degree(event.target.id, 'calculatorValue');
    } else if (event.target.id === 'lg' || event.target.id === 'ln') {
        log(event.target.id, 'calculatorValue');
    }  else if (event.target.id === 'fractional' || event.target.id === 'i' ||
        event.target.id === 'sqrt(' || event.target.id === 'sqrt(-') {
        sqrt(event.target.id);
    } else if (event.target.id === 'percent') {
        percent();
    } else if (event.target.id === 'changeButton') {
        changeButton();
    } else if (event.target.id === 'mod') {
        mod('calculatorValue');
    } else if (event.target.id === 'getExp') {
        getExp('calculatorValue');
    } else if (event.target.id === 'module') {
        getModule('calculatorValue');
    } else if (event.target.id === 'factorial') {
        fact('calculatorValue');
    } else if (event.target.id === 'getE') {
        getE('calculatorValue');
    } else if (event.target.id === 'pi') {
        pi('calculatorValue');
    } else {
        addValue(event.target.id, 'calculatorValue');
    }
})

module.exports = { addValueBracket, addValue, changeValue, changePositiveToNegative,
    pointValue, cleaning, back, pi, getE, getExp, mod, fact, log, degree, getModule, changeButton,
    percent, sqrt}