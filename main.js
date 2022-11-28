let operationValue = ''
let resultValue = ''
let operator = ''

const operationScreen = document.querySelector('.top');
const resultScreen = document.querySelector('.bottom');

const numberButtons = document.querySelectorAll('.digit');

const operatorButtons = document.querySelectorAll('.operator')

const clearButton = document.querySelector('.clear');
const decimalButton = document.querySelector('.decimal');
const equalsBUtton = document.querySelector('.equals');

numberButtons.forEach((number) => number.addEventListener('click', function(e){  //For each button we add an event listener,
    displayNum(e.target.textContent);                                            //then we target the text within each button (1, 2, 3...)
    operationScreen.textContent = operationValue;                                //the text inside operation screen is updated by matching it to 
}))                                                                              //operationValue variable, which is being updated by the displayNum function below.



function displayNum(num) {
    if (operationValue.length <= 15) {
        operationValue += num; //the number on the operation screen is updated with the num passed into this function
    }
}
