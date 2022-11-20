'use strict'

const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const truPasswordError = document.getElementById('password-confirmation-error');
const regButton = document.getElementById('register-button');

regButton.addEventListener('click', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const inputEmail = document.querySelector('.main-container-form__email-input');
  const password = document.getElementById('password').value;
  const inputPassword = document.querySelector('.main-container-form__password-input');
  const truPassword = document.getElementById('password-confirmation').value;
  const inputTruPassword = document.querySelector('.main-container-form__password-confirmation-input');

  let gender;
  const aboutMe = document.getElementById('about-me').value;
  const checkbox = document.getElementById('checkbox').checked;

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  if (!validateEmail(email)) {
    inputEmail.style.borderColor = '#EE2424';
    emailError.innerText = 'Email введён некорректно';
  }


  if (!email) {
    inputEmail.style.borderColor = '#EE2424';
    emailError.innerText = 'Поле обязательно для заполнения';
  }
 
  if (password.length < 8) {
    inputPassword.style.borderColor = '#EE2424';
    passwordError.innerText = 'Пароль должен содержать не менее 8 символов';
  }

  if (!password) {
    inputPassword.style.borderColor = '#EE2424';
    passwordError.innerText = 'Поле обязательно для заполнения';
  } 

  if (!truPassword) {
    inputTruPassword.style.borderColor = '#EE2424';
    truPasswordError.innerText = 'Пароли не совпадают';
  } 
  
  if (password !== truPassword) {
    inputTruPassword.style.borderColor = '#EE2424';
    truPasswordError.innerText = 'Пароли не совпадают';
  }

  else {
    if (validateEmail(email) === true && password === truPassword && password.length >= 8) {
      inputEmail.style.borderColor = '#787878';
      emailError.innerText = '';
      inputPassword.style.borderColor = '#787878';
      passwordError.innerText = '';
      inputTruPassword.style.borderColor = '#787878';
      truPasswordError.innerText = '';
    }
  }

  function getGender() {
    const man = document.getElementById('radio-man');
    const woman = document.getElementById('radio-woman');

    if (man.checked) {
      gender = 'Man';
    } else if (woman.checked) {
      gender = 'Woman';
    }
  }

  getGender()

  function infoUser() {
    let user = new Object();

    user.email = email;
    user.password = password;
    user.truPassword = truPassword;
    user.gender = gender;
    user.aboutMe = aboutMe;
    user.agreement = checkbox;

    return console.log(user);
  }

  infoUser();

})
