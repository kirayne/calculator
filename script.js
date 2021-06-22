let a = '';
let b;
let operator;
let result;
//1st loop operator = id 2nd loop 0
function operatorValue(e) {
    if (operator === undefined) {
        operator = e.target.id;
    }
    stopA();
    operator = e.target.id;
}

function stopA() {
    if (b === undefined) {
        b = +a;
        a = '';
    }
    else {
        a = +a;
        operate(a, operator, b);
        a = '';
        b = result;
        document.querySelector('#display').textContent = result;
        operator = undefined;
    }
}

//getting the number value and storing inside a
function displayButton(e) {
    value(e.target.value);
}

//concatenating the input numbers
function value(x) {
    a += x;
    document.querySelector('#display').textContent = a;
    console.log(a);
}

//reset the calculator
function clear() {
    a = '';
    b = undefined;
    operator = undefined;
    result = undefined;
    document.querySelector('#display').textContent = result;
}

function deleteLastNumber() {
    a = document.querySelector('#display').textContent.toString().slice(0, -1);
    document.querySelector('#display').textContent = a; 
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return b - a;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b / a;
}

//receives a, b and the operator and call the functions
function operate(a, operators, b) {

    if (operators === 'add') {
        result = add(a, b);
    }
    else if (operators === 'subtract') {
        result = subtract(a, b);
    }
    else if (operators === 'multiply') {
        result = multiply(a, b);
    }
    else {
        result = divide(a, b);
    }

    console.log(result);
}

function displayResult() {
    a = +a;
    operate(a, operator, b);
    document.querySelector('#display').textContent = result;
    b = result;
}



function loader() {

    const del = document.querySelector('#del');
    const cleaner = document.querySelector('#clear');
    const operators = document.querySelectorAll('.operators');
    const numbers = document.querySelectorAll('.numbers');
    const equal = document.querySelector('#operate');

    del.addEventListener('click', deleteLastNumber);
    cleaner.addEventListener('click', clear);
    equal.addEventListener('click', displayResult);

    operators.forEach(element =>
        element.addEventListener('click', operatorValue));
    numbers.forEach(element =>
        element.addEventListener('click', displayButton));

}