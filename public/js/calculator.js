let currentInput = '';
let previousInput = '';
let operation = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operation = '';
    previousInput = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
