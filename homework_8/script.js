'use strict';

const button = document.getElementById('button'); 

button.addEventListener('click', (event) => {
event.preventDefault();
let result;
const operand1 = document.getElementById('operand1').value;
const operand2 = document.getElementById('operand2').value;
const operator = document.getElementById('operator').value;

switch(operator.trim()) {
    case '': result = 'Не введён знак';
    break;
    case '+': result = Number(operand1) + Number(operand2);
    break;
    case '-': result = Number(operand1) - Number(operand2);
    break;
    case '*': result = Number(operand1) * Number(operand2);
    break;
    case '/': result = Number(operand1) / Number(operand2);
    break;
    default: result = 'Программа не поддерживает такую операцию';
    break;
}
if (operand1.length===0) {
    console.log('Первое число не указано')   
} else if (!((Number(operand1)*0) === 0) ) {
    console.log('Некорректный ввод 1-го числа')    
};
if (operand2.length===0) {
    console.log('Второе число не указано')   
} else if (!((Number(operand2)*0) === 0 )) {
    console.log('Некорректный ввод 2-го числа')    
};
if (operator.length===0) {
    console.log('Не введен знак')   
} else if (!((operator === '/')||(operator === '*')||(operator === '+')||(operator === '-'))) {
    console.log('Программа не поддерживает такую операцию')    
}

console.log(result)
document.getElementById('result').innerText = result;
});