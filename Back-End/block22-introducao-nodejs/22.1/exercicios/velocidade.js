const readline = require('readline-sync');

console.log('Velocidade média de um carro numa corrida');
console.log('-----------------------');

const distancia = readline.questionInt('Qual é a distância? ');
const tempo = readline.questionFloat('Qual é o tempo? ');
const result = distancia / tempo;

console.log(`velocidade igual ${result} m/s`);