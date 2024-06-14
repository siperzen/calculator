function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

let firstNumber;
let calculationOperator;
let secondNumber;

function operate(calculationOperator, firstNumber, secondNumber) {
    add(firstNumber, secondNumber);
}

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
//  make the resultdisplay show the clicked buttons

let result = "0";
// add up each clicked number to resultDisplay
const resultDisplay = document.querySelector(".result-display");
resultDisplay.textContent = result;
one.addEventListener("click", () => {
    result += "1";
})

const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", () => {
    resultDisplay.textContent = "";
})



