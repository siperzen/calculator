function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

let firstNumber;
let calculationOperator;
let secondNumber;

function operate(calculationOperator, firstNumber, secondNumber) {
    return calculationOperator(firstNumber, secondNumber);
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
const zero = document.querySelector(".zero");
//  make the resultdisplay show the clicked buttons

let currentNumber = "";
// add up each clicked number to resultDisplay
let resultDisplay = document.querySelector(".result-display");

one.addEventListener("click", () => {
    currentNumber += "1";
    resultDisplay.textContent = currentNumber;
    console.log(currentNumber);
});

two.addEventListener("click", () => {
    currentNumber += "2";
    resultDisplay.textContent = currentNumber;
    console.log(currentNumber);
});

three.addEventListener("click", () => {
    currentNumber += "3";
    resultDisplay.textContent = currentNumber;
    console.log(currentNumber);
});

four.addEventListener("click", () => {
    currentNumber += "4";
    resultDisplay.textContent = currentNumber;
    console.log(currentNumber);
});

five.addEventListener("click", () => {
    currentNumber += "5";
    resultDisplay.textContent = currentNumber;
    console.log(currentNumber);
});

six.addEventListener("click", () => {
    currentNumber += "6";
    resultDisplay.textContent = currentNumber;
    console.log(currentNumber);
});

seven.addEventListener("click", () => {
    currentNumber += "7";
    resultDisplay.textContent = currentNumber;
    console.log(currentNumber);
});

eight.addEventListener("click", () => {
    currentNumber += "8";
    resultDisplay.textContent = currentNumber;
    console.log(currentNumber);
});

nine.addEventListener("click", () => {
    currentNumber += "9";
    resultDisplay.textContent = currentNumber;
    console.log(currentNumber);
});

zero.addEventListener("click", () => {
    currentNumber += "0";
    resultDisplay.textContent = currentNumber;
    console.log(currentNumber);
});

const equals = document.querySelector(".equals");
equals.addEventListener("click", () => {
    secondNumber = Number(currentNumber);
    currentNumber = operate(calculationOperator, firstNumber, secondNumber);
    console.log(currentNumber);
    resultDisplay.textContent = currentNumber
})

const addButton = document.querySelector(".add")
addButton.addEventListener("click", () => {
    calculationOperator = add;
    firstNumber = Number(currentNumber);
    console.log(firstNumber);
    currentNumber = "";
})


const subtractButton = document.querySelector(".subtract")
subtractButton.addEventListener("click", () => {
    calculationOperator = subtract;
    firstNumber = Number(currentNumber);
    console.log(firstNumber);
    currentNumber = "";
})

const multiplyButton = document.querySelector(".multiply")
multiplyButton.addEventListener("click", () => {
    calculationOperator = multiply;
    firstNumber = Number(currentNumber);
    console.log(firstNumber);
    currentNumber = "";
})

const divideButton = document.querySelector(".divide")
divideButton.addEventListener("click", () => {
    calculationOperator = divide;
    firstNumber = Number(currentNumber);
    console.log(firstNumber);
    currentNumber = "";
})

const clearButton = document.querySelector("button.clear");
clearButton.addEventListener("click", () => {
    currentNumber = "";
    firstNumber = "";
    secondNumber = "";
    calculationOperator = "";    
})

