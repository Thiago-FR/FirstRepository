const readline = require('readline-sync');

console.log('Calculo IMG');
console.log('-----------------------');

const peso = readline.questionInt('Qual seu peso? ');
const altura = readline.questionFloat('Qual sua Altura? ');
const result = (peso / Math.pow(altura / 100, 2)).toFixed(2);


const table = {
  'IMC': 'Situação',
  '---------------': '-------------------------',
  'Abaixo de 18,5': 'Abaixo do peso (magreza)',
  'Entre 18,5 e 24,9': 'Peso normal',
  'Entre 25,0 e 29,9': 'Acima do peso (sobrepeso)',
  'Entre 30,0 e 34,9': 'Obesidade grau',
  'Entre 35,0 e 39,9': 'Obesidade grau II',
  '40,0 e acima': 'Obesidade graus III e IV',
}

const table2 = {
  '18.5': 'Abaixo do peso (magreza)',
  '24.9': 'Peso normal',
  '29.9': 'Acima do peso (sobrepeso)',
  '34.9': 'Obesidade grau',
  '39.9': 'Obesidade grau II',
  '40': 'Obesidade graus III e IV',
}

const arr = [18.5, 24.9, 29.9, 34.9, 39.9, 40]

function returnTable(returnTable) {
  console.table(table)
  console.log('');
  console.log(`Seu IMG é ${result} portanto ${returnTable}`);
}

if (result > 40) {
  returnTable(table2[40])
} else {
  for (let index of arr) {
    if (result <= index) {
      returnTable(table2[index])
      break;
    };
  };
}
