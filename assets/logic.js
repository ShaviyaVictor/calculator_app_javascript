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
    if (number === '.' && this.currentOperand.includes('.')) 
    return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }
  chooseOperation(operation) {

  }
  compute() {

  }
  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand
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

// Hooking up the const and making them work on our calculator object
const calculator = new Calclator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})