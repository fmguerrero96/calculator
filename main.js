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
    displayNum1(e.target.textContent);                                           //then we target the text within each button (1, 2, 3...)
    operationScreen.textContent = operationValue1;                               //the text inside operation screen is updated by matching it to 
}))                                                                              //operationValue variable, which is being updated by the displayNum function below.

operatorButtons.forEach((oper) => oper.addEventListener('click', function(e){
    displaySign(e.target.textContent);
    operationScreen.textContent = '';
    resultScreen.textContent = operationValue2 + ' ' + operator
}))

equalsButton.addEventListener('click', function(e){
    calculate(operationValue2, operationValue1, operator);
    resultScreen.textContent = resultValue
    operationScreen.textContent = '';
    operator = '';
    operationValue1 = resultValue;
    console.log(operationValue1);
    console.log(operationValue2);
    console.log(resultValue);
})

decimalButton.addEventListener('click', function(e){
    displayDecimal(e.target.textContent)
})  

function displayNum1(num) {
    if (operationValue1.length <= 10) {
        operationValue1 += num; //the number on the operation screen is 
                               //updated with the num passed into this function
    }}

function displaySign(sign) {
    operator = sign;
    operationValue2 = operationValue1;
    operationValue1 = ''
}

function displayDecimal(period){
    if (!operationValue1.includes('.')){
    operationValue1 += period}
}

function calculate(num1, num2, action){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (action === '+'){resultValue = Math.round((num1 + num2)*100000)/100000}
    else if (action === '-'){resultValue = Math.round((num1 - num2)*100000)/100000}
    else if (action === 'x'){resultValue = Math.round((num1 * num2)*100000)/100000}
    else if (action === '/'){resultValue = Math.round((num1 / num2)*100000)/100000}
    if (resultValue === Infinity){
    resultValue = 'Tas pero bien mens@, no se puede dividir entre 0'}
}

clearButton.addEventListener('click', function(){
    operationValue1 = '';
    resultValue = '';
    operator = '';
    operationScreen.textContent = '';
    resultScreen.textContent = '';
})

