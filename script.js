let equation = '';

document.querySelectorAll('.math').forEach(button => button.addEventListener('click', e => {
    let display = document.querySelector('.display');
    let error = document.querySelector('.error');

    error.textContent = '';
    if (equation.length >= 2) {
        if (isNaN(e.target.textContent) && isNaN(equation[equation.length - 2])) {
            error.textContent = 'Invalid input';
        } else if (!isNaN(e.target.textContent)) {
            equation += e.target.textContent;
            display.textContent = equation;
        } else if (isNaN(e.target.textContent) && !isNaN(equation[equation.length - 2])) {
            equation += ` ${e.target.textContent} `;
            display.textContent = equation;
        }
    } else {
        if (!isNaN(e.target.textContent)) {
            equation += e.target.textContent;
            display.textContent = equation;
        } else {
            equation += ` ${e.target.textContent} `;
            display.textContent = equation;
        }
    }
}));

document.querySelector('.equal').addEventListener('click', e => {
    if(isNaN(equation[equation.length - 1])) {
        document.querySelector('.error').textContent = 'Invalid operation';
    } else {
        let equationArray = equation.split(' ');
        console.table(equationArray);
        for (let i = 0; i < equation.length; i++) {
            if (i === '*') {
            
            }
        }
    }
});

document.querySelector('.clear').addEventListener('click', e => {
    equation = '';
    document.querySelector('.display').textContent = undefined;
});



function operate(numberOne, operator, numberTwo) {
    let result;
    switch (operator) {
        case '+':
            result = add(numberOne, numberTwo);
            break;
        case '-':
            result = add(numberOne, numberTwo);
            break;
        case '*':
            result = add(numberOne, numberTwo);
            break;
        case '/':
            result = add(numberOne, numberTwo);
            break;
        default:
            result = 'Select an operation';
    }
    return result;
}

function add(addendOne, addendTwo) {
    return addendOne + addendTwo;
}

function subtract(minuend, subtrahend) {
    return minuend - subtrahend;
}

function multiply(multiplicand, multiplier) {
    return multiplicand * multiplier;
}

function divide(dividend, divisor) {    
    return dividend / divisor;
}