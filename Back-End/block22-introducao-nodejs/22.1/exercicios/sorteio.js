const readline = require('readline-sync');

console.log('jogo de adivinhação');
console.log('-----------------------');

const num = readline.questionInt('Digite um número da sorte entre 1 e 10: ');
const numRandom = Math.ceil(Math.random() * 9);

if (num < 1 || num > 10) {
  console.log('Número inserido incorreto tente novamente!');
} else {
  if (num === numRandom) console.log(`Parabéns, número correto!. O número é ${numRandom}`);
  else console.log(`Opa, não foi dessa vez. O número era ${numRandom}`);
}