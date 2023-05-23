let equation = '';

document.querySelectorAll('.operand').forEach(button => button.addEventListener('click', e => {
    equation += e.target.textContent;
    populateDisplay(equation);
}));



document.querySelector('.equal').addEventListener('click', e => operate);


function populateDisplay(value) {
    document.querySelector('.display').textContent += value;
}

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