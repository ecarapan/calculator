
function add(...values) {
    return values.reduce((oldValue, newValue) => oldValue + newValue, 0);
}

function subtract(...values) {
    return values.reduce((oldValue, newValue) => oldValue - newValue, values[0]);
}

console.log(subtract(1, 1, 3));