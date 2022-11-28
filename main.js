let operationValue1 = '';
let operationValue2 = '';
let resultValue = '';
let operator = '';

const operationScreen = document.querySelector('.top');
const resultScreen = document.querySelector('.bottom');

const numberButtons = document.querySelectorAll('.digit');
const operatorButtons = document.querySelectorAll('.operator')

const clearButton = document.querySelector('.clear');
const decimalButton = document.querySelector('.decimal');
const equalsButton = document.querySelector('.equals');

numberButtons.forEach((number) => number.addEventListener('click', function(e){  //For each button we add an event listener,
    displayNum1(e.target.textContent);                                            //then we target the text within each button (1, 2, 3...)
    operationScreen.textContent = operationValue1;                                //the text inside operation screen is updated by matching it to 
}))                                                                              //operationValue variable, which is being updated by the displayNum function below.


operatorButtons.forEach((operator) => operator.addEventListener('click', function(e){
    displayOperator(e.target.textContent);     
    operationScreen.textContent = operator; 
    resultScreen.textContent = operationValue2;
}))                                            


function displayNum1(num) {
    if (operationValue1.length <= 10) {
        operationValue1 += num; //the number on the operation screen is 
                               //updated with the num passed into this function
    }}

function displayOperator(oper){
    operator = oper;
    operationValue2 = operationValue1;
    operationValue1 = '';
}

clearButton.addEventListener('click', function(){
    operationValue1 = '';
    resultValue = '';
    operator = '';
    operationScreen.textContent = '';
    resultScreen.textContent = '';
})