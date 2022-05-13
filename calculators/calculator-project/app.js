// clear() {

// }

// delete() {

// }

// appendNumber(number) {
    

// }

// chooseOperation() {

// }

// compute() {

// }

// updateDisplay() {

// }

const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const deleteButton = document.querySelector('.delete');
const equalsButton = document.querySelector('.equals');
const allClearButton = document.querySelector('.all-clear');
const previousOperandTextElement = document.querySelector('.previous-operand');
const currentOperandTextElement = document.querySelector('.current-operand');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentOperandTextElement.innerText += button.innerText;
    })
})


