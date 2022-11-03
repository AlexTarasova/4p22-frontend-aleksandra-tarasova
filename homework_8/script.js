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
};

if (operand2.trim() === '') {
    result = 'Второе значение не указано';
};

if (operand1.trim() === '') {
    result = 'Первое значение не указано';
};

if (isNaN(operand1) || isNaN(operand2)) {
    result = 'Некорректный ввод чисел';
};

if (result === Infinity) {
    result = 'Операция не корректна';  
};

if (result !== 'Программа не поддерживает такую операцию' && result !== 'Первое значение не указано' && result !== 'Второе значение не указано' && result !== 'Некорректный ввод значений' && result !== 'Не введён знак' && isNaN(result)) {
    result = 'Операция не корректна';
};

console.log(result)
document.getElementById('result').innerText = result;
});