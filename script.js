let equation = '';

//Listens for number clicks
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
    } else {3
        if (!isNaN(e.target.textContent)) {
            equation += e.target.textContent;
            display.textContent = equation;
        } else {
            equation += ` ${e.target.textContent} `;
            display.textContent = equation;
        }
    }
}));

//Listens for equals sign click
document.querySelector('.equal').addEventListener('click', e => {
    if(isNaN(equation[equation.length - 2]) || equation.length === 1) {
        document.querySelector('.error').textContent = 'Invalid operation';
    } else {
        let eqArray = equation.split(' ');
        for (let i = 0; i < eqArray.length; i++) {
            if (eqArray[i] === '+' || eqArray[i] === '-') {   
                if (eqArray[i + 2] === '*' || eqArray[i + 2] === '÷') {
                    eqArray[i + 1] = operate(+eqArray[i + 1], eqArray[i + 2], +eqArray[i + 3]);
                    eqArray.splice(i + 2, 2);
                    i--;
                } else {
                    eqArray[i + 1] = operate(+eqArray[i - 1], eqArray[i], +eqArray[i + 1]);
                    eqArray.splice(i - 1, 2);
                    i--;
                }
            } else if (eqArray[i] === '*' || eqArray[i] === '÷') {
                eqArray[i + 1] = operate(+eqArray[i - 1], eqArray[i], +eqArray[i + 1]);
                eqArray.splice(i - 1, 2);
                i--;
            }
        }

        if (!Number.isInteger(eqArray[0])) 
            eqArray[0] = eqArray[0].toFixed(2);
        document.querySelector('.display').textContent = eqArray[0];
        equation = eqArray[0];
    }
});

//Listens for the clear button, C, click.
document.querySelector('.clear').addEventListener('click', e => {
    document.querySelector('.display').textContent = '';
    equation = '';
});



function operate(numberOne, operator, numberTwo) {
    let result;
    switch (operator) {
        case '+':
            result = add(numberOne, numberTwo);
            break;
        case '-':
            result = subtract(numberOne, numberTwo);
            break;
        case '*':
            result = multiply(numberOne, numberTwo);
            break;
        case '÷':
            result = divide(numberOne, numberTwo);
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