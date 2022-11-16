'use strict';

fetch('https://reqres.in/api/users?per_page=12')
.then((response) => {
    console.log(response);
    return response.json();
}).then((body) => {
    
    console.log('-----------');
    console.log('Пункт №1:')
    console.log('-----------');
    console.log(body);
    
    console.log('-----------');
    console.log('Пункт №2:')
    console.log('-----------');
    body.data.forEach(element => {
        console.log(element.last_name)
    });
 
    console.log('-----------');
    console.log('Пункт №3:')
    console.log('-----------');
    body.data.filter(item=>item.last_name.startsWith('F')).forEach(element => {
        console.log(element.last_name)
    });

    console.log('-----------');
    console.log('Пункт №4:')
    console.log('-----------');
    console.log(body.data.reduce((acc, item)=>acc + item.first_name + " " + item.last_name +', ', "Наша база содержит данные следующих пользователей:"));
    
    console.log('-----------');
    console.log('Пункт №5:')
    console.log('-----------');
    Object.keys(body).forEach(element=>
        console.log(element)
    );

           
});





