let XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();


xhr.open('GET','https://restcountries.com/v3.1/all');

xhr.send();

xhr.onload = function(){
    let countries = JSON.parse(xhr.responseText)
    let sum = countries.reduce((prev,curr) => {
        return prev+curr.population
    },0)
    console.log(sum)
    
}

