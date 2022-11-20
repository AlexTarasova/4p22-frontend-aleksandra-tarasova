'use strict';

const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const difPasswordError = document.getElementById('password-different-error');
const formButton = document.getElementById('form-button');

formButton.addEventListener('click', (event) => {
  event.preventDefault();

const email = document.getElementById('email').value;
const inputEmail = document.querySelector('.form__email-input');
const password = document.getElementById('password').value;
const inputPassword = document.querySelector('.form__password-input');
const confPassword = document.getElementById('password-confirm').value;
const inputСonfassword = document.querySelector('.form__password-confirm-input');

function getGender() {
  const man = document.getElementById('man');
  const woman = document.getElementById('woman');

  if (man.checked) {
      gender = 'MAN';
  } else if (woman.checked) {
      gender = 'WOMAN';
  }
}

getGender();

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

if (!validateEmail(email) && email.length >= 1) {
  inputEmail.error.style.color = '#EE2424';
  emailError.innerText = 'Email введён некорректно';
}

if (email.length === 0) {
  inputEmail.error.style.color = '#EE2424';
  emailError.innerText = 'Поле обязательно для заполнения';
}

if (password.length < 8 && password.length > 0) {
  inputPassword.error.style.color = '#EE2424';
  passwordError.innerText = 'Пароль должен содержать не менее 8 символов';
}

if (password === '') {
  inputPassword.error.style.color = '#EE2424';
  passwordError.innerText = 'Поле обязательно для заполнения';
} 

if (!confPassword) {
  inputСonfassword.error.style.color = '#EE2424';
  difPasswordError.innerText = 'Пароли не совпадают';
} 
  
if (password !== confPassword) {
  inputСonfassword.error.style.color = '#EE2424';
  difPasswordError.innerText = 'Пароли не совпадают';
}

else {
  if (validateEmail(email) === true && password === confPassword && password.length >= 8) {
    inputEmail.error.style.color = '#787878';
    emailError.innerText = '';
    inputPassword.error.style.color = '#787878';
    passwordError.innerText = '';
    inputСonfassword.error.style.color = '#787878';
    difPasswordError.innerText = '';
  }
}
});