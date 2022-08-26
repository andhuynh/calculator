// Get elements
const nums = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operation');
const screen = document.getElementById('screen');
const clear = document.getElementById('clear');
const equal = document.getElementById('solve');

// Store values
let first = null;
let second = null;
let operation = null;

// Button functions
nums.forEach((button) => {
    button.addEventListener('click', () => inputNum(button.textContent));
});

operators.forEach((button) => {
    button.addEventListener('click', () => setOperator(button.textContent));
});

equal.addEventListener('click', () => operate(operation, first, second));

clear.addEventListener('click', () => clearScreen());

// Basic calculation functions
function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    if(b === 0){
        alert("Error: Cannot divide by zero");
        return;
    }
    return a / b;
}

function operate(operator, a, b){
    switch(operator){
        case '+':
            showAns(add(a,b));
            break;
        case '-':
            showAns(subtract(a,b));
            break;
        case '*':
            showAns(multiply(a,b));
            break;
        case '/':
            showAns(divide(a,b));
            break;
        default:
            return;
    }
}

// Display functions
function inputNum(num){
    screen.textContent += num;
}

function setOperator(operator){
    if(first != null && screen.textContent != ''){
        second = screen.textContent;
        operate(operator, first, second);
        return;
    }
    first = screen.textContent;
    operation = operator;
    clearScreen();
}

function showAns(result){
    screen.textContent = result;
}

function clearScreen(){
    screen.textContent = '';
}