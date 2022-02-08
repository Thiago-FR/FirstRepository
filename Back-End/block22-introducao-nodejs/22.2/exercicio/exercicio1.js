const fs = require('fs');
const readline = require('readline-sync');

console.log('Insira Três Valores');
const num1 = readline.questionInt('Insira o 1° Valor ');
const num2 = readline.questionInt('Insira o 2° Valor ');
const num3 = readline.questionInt('Insira o 3° Valor ');

function calcNumber(a, b, c) {
  return new Promise((resolve, reject) => {
    const result = ((a + b) * c);
    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
      if ( result > 50) return resolve(result)
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