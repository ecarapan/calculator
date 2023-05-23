let equation = '';

document.querySelectorAll('.math').forEach(button => button.addEventListener('click', e => {
    if (equation.length >= 2) {
        if (isNaN(e.target.textContent) && isNaN(equation[equation.length - 1])) {
            document.querySelector('.error').textContent = 'Invalid input';
        } else {
            equation += e.target.textContent;
            document.querySelector('.display').textContent = equation;
        }
    } else {
        equation += e.target.textContent;
        document.querySelector('.display').textContent = equation;
    }

}));

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