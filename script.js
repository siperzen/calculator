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
    return calculationOperator(firstNumber, secondNumber)
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

let result = "";
// add up each clicked number to resultDisplay
let resultDisplay = document.querySelector(".result-display");

one.addEventListener("click", () => {
    result += "1";
    resultDisplay.textContent = result;
    console.log(result);
});

two.addEventListener("click", () => {
    result += "2";
    resultDisplay.textContent = result;
    console.log(result);
});

three.addEventListener("click", () => {
    result += "3";
    resultDisplay.textContent = result;
    console.log(result);
});

four.addEventListener("click", () => {
    result += "4";
    resultDisplay.textContent = result;
    console.log(result);
});

five.addEventListener("click", () => {
    result += "5";
    resultDisplay.textContent = result;
    console.log(result);
});

six.addEventListener("click", () => {
    result += "6";
    resultDisplay.textContent = result;
    console.log(result);
});

seven.addEventListener("click", () => {
    result += "7";
    resultDisplay.textContent = result;
    console.log(result);
});

eight.addEventListener("click", () => {
    result += "8";
    resultDisplay.textContent = result;
    console.log(result);
});

nine.addEventListener("click", () => {
    result += "9";
    resultDisplay.textContent = result;
    console.log(result);
});

const equals = document.querySelector(".equals");
equals.addEventListener("click", () => {
    if(firstNumber !== undefined && calculationOperator !== undefined && secondNumber !== undefined) {
        operate(calculationOperator, firstNumber, secondNumber);
    }
})

const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", () => {
    result = "";    
})








