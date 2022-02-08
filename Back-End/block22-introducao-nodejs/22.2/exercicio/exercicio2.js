const fs = require('fs');

function numRandom() {
  return Math.floor(Math.random() * 100 + 1);
};

const num1 = numRandom();
const num2 = numRandom();
const num3 = numRandom();

function calcNumber(a, b, c) {
  return new Promise((resolve, reject) => {
    const result = ((a + b) * c);
    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
      if ( result > 5000) return resolve(result)
      return reject('Promise Reject Valor muito baixo')
    } else {
      return reject('Promise Reject Tipo Number não inserido')
    }
  });
};

calcNumber(num1, num2, num3)
  .then(content => {
    console.log(`Promise resolvida valor ${content}`)
  })
  .catch(content => {
    console.error(`Erro: ${content}`);
  });