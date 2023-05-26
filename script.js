let equation = '';

document.querySelectorAll('.math').forEach(button => button.addEventListener('click', e => {
    let display = document.querySelector('.display');
    let error = document.querySelector('.error');

    error.textContent = '';
    if (equation.length >= 2) {
        if (isNaN(e.target.textContent) && isNaN(equation[equation.length - 1])) {
            error.textContent = 'Invalid input';
        } else {
            equation += e.target.textContent;
            display.textContent = equation;
        }
    } else {
        equation += e.target.textContent;
        display.textContent = equation;
    }
}));

document.querySelector('.clear').addEventListener('click', e => {
    equation = '';
    document.querySelector('.display').textContent = undefined;
});

document.querySelector('.equal').addEventListener('click', e => {


});



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