'use strict';

const form = document.querySelector('.form');

const input = form.querySelectorAll('.input');

form.addEventListener('submit', function () {
    console.log('clicked on validate')
});

form.addEventListener('submit', function (event) {
    event.preventDefault()
  
    for (i = 0; i < inputs.length; i++) {
      if (!inputs[i].value) {
        console.log('field is blank', inputs[i])
      }
    }
  })
  