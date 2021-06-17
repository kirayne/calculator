let a = '';
let b;
let operator;
let result;
let elp;
//getting the operators id string and storing inside operator
function operatorValue(e) {
    operator = e.target.id;
    stopA();
}
function stopA(){
    if(b===undefined){
        b = +a;
        a = '';
    }
    else{
        a = +a;
        operate (a, operator, b);
    }
}
//getting the number value and storing inside a
function displayButton(e) {
   value(e.target.value);
}
//concatenating the input numbers
function value(x){
    a += x;
    console.log(a);
}
//reset the calculator
function clear() {

}

function add(a, b) {
    elp = a + b;
    b = elp;
    return elp;
}

function subtract(a, b) {
    elp = b - a;
    b = elp;
    return elp;
}

function multiply(a, b) {
    elp = a * b;
    b = elp;
    return elp;
}

function divide(a, b) {
    elp = b / a;
    b = elp;
    return elp;
}
//receives a, b and the operator and call the functions
function operate(a, operator, b) {
    if (operator === 'add') {
        result = add(a, b);
    }
    else if (operator === 'subtract') {
        result = subtract(a, b);
    }
    else if (operator === 'multiply') {
        result = multiply(a, b);
    }
    else {
        result = divide(a, b);
    }
    console.log(result);
}

function loader() {

    const operators = document.querySelectorAll('.operators');
    const numbers = document.querySelectorAll('.numbers');

    operators.forEach(element =>
        element.addEventListener('click', operatorValue));
    numbers.forEach(element =>
        element.addEventListener('click', displayButton));
}