// Get elements
const nums = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operation');
const screen = document.getElementById('screen');
const history = document.getElementById('history');
const clear = document.getElementById('clear');
const equal = document.getElementById('solve');

// Store values
let first = null;
let second = null;
let operation = null;

// Button functions
nums.forEach((button) => {
    button.addEventListener('click', () => {
        if(first != null){
            screen.textContent = '';
        }
        inputNum(button.textContent)
    });
});

operators.forEach((button) => {
    button.addEventListener('click', () => setOperator(button.textContent));
});

equal.addEventListener('click', () => solve());

clear.addEventListener('click', () => {
    clearScreen();
    history.textContent = '';
    reset();
});

// Display functions
function inputNum(num){
    screen.textContent += num;
}

function setOperator(operator){
    if(operation != null && screen.textContent != ''){
        second = screen.textContent;
        let ans = operate(operation, parseFloat(first), parseFloat(second));
        showAns(ans);
        history.textContent = ans + ' ' + operator;
        reset();
        first = ans;
        operation = operator;
        clearScreen();
        return;
    }
    if(screen.textContent != null){
        first = screen.textContent;
        operation = operator;
        history.textContent += first + ' ' + operation;
        clearScreen();
    }
}

function solve(){
    if(operation != null && screen.textContent != ''){
        second = screen.textContent;
        let ans = operate(operation, parseInt(first), parseInt(second));
        showAns(ans);
        history.textContent = '';
        reset();
    }
}

function showAns(result){
    screen.textContent = result;
}

function clearScreen(){
    screen.textContent = '';
}

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

function reset(){
    first = null;
    second = null;
    operation = null;
}

function operate(operator, a, b){
    switch(operator){
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
        default:
            return;
    }
}
