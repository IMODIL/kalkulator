let prevNumber = "";
let calculationOperator = "";
let currentNumber = "";

const calculatorScreen = document.querySelector(".calculator-screen");
const updateScreen = (number) => {
  calculatorScreen.value = number;
};

const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

const inputOperator = (operator) => {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "0";
  // prevNumber = currentNumber;
  // calculationOprator = operator;
  // currentNumber = "";
};

const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (event) => {
  // console.log(event.target.value);
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});
inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};

const numbers = document.querySelectorAll(".number");
// console.log(numbers);
numbers.forEach((number) => {
  // console.log(number);
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

const clearBtn = document.querySelector(".all-clear");
clearBtn.addEventListener("click", () => {
  // console.log("test button");
  clearAll();
  updateScreen(currentNumber);
});
const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
};

const equalSign = document.querySelector(".equal-sign");
equalSign.addEventListener("click", () => {
  // console.log("equal button is pressed");
  calculate();
  updateScreen(currentNumber);
});

const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = prevNumber - currentNumber;
      break;
    case "*":
      result = prevNumber * currentNumber;
      break;
    case "/":
      result = prevNumber / currentNumber;
      break;
    default:
      break;
  }
  currentNumber = result;
  calculationOperator = "";
};

const percentage = document.querySelector(".percentage");
percentage.addEventListener("click", () => {
  persen = prevNumber / 100;
  // num1 = currentNumber;
  result = currentNumber * persen;
  currentNumber = result;
  updateScreen(currentNumber);
});
