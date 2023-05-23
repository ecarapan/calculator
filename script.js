let numbers = [];
let operator = '';

let display = document.querySelector('.display');
let buttons = Array.from(document.querySelectorAll('button'));

buttons.forEach(button => button.addEventListener('click', e => {
    if (typeof e.target.textContent === 'number') {
        numbers.push(+e.target.textContent);
        display.textContent += e.target.textContent
    } else {
        operator = e.target.textContent;
        display.textContent += e.target.textContent
    }
}));

function operate(numberOne, numberTwo, operator) {
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
            result = 'Select on operation';
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