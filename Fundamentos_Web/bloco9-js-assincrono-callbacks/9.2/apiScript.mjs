import fetch from 'node-fetch';
// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const imprimiDom = (data) => {
  const id = document.querySelector('#jokeContainer');
  id.innerHTML = data.joke;
}

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: {'Accept': 'application/json'}
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    //.then((data) => imprimiDom(data))
    .then((data) => console.log(data))
};

//fetchJoke();

// ********** Segunda Parte *************

const resolve = (number) => {
  const arr = [2,3,5,10]
  return arr.map((array) => array * number);
};

const funcReduce = (array) => {
  return array.reduce((acc, curr) =>  acc + curr);
}

const promise = new Promise ((resolve, reject) => {
  const number = [];
  for (let index = 0; number.length < 10; index += 1) {
    const num = Math.round(Math.random() * (50 - 1) + 1);
    number.push( num * num);
  }
  const some = funcReduce(number);

  if (some > 8000) {
    reject(some);
  }
  resolve(some);
})
.then((number) => resolve(number))
.then((number) => funcReduce(number))
.then((number) => console.log(`Promise resolvida ${number}`))
.catch((number) => console.log(`É mais de oito mil! Essa promise deve estar quebrada! ${number}`));
  


