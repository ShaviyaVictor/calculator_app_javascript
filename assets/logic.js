// create a calculator class to hold our inputs
class Calclator {
  // create the class constructor
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;

    this.clear()
    
  }

  // defining the varius operation functions
  clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }
  delete() {

  }
  appendNumber(number) {

  }
  chooseOperation(operation) {

  }
  compute() {

  }
  updateDisplay() {

  }
}

// select all the buttons and operands in the html file
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');

const equalButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');