const readline = require('readline-sync');

const script = ['./imc.js', './velocidade.js', './sorteio.js'];

console.log(`
-----------------------
1 | Imc
2 | Velocidade
3 | Sorteio
-----------------------
`);

const num = readline.keyIn('Qual script deseja executar? ');
if (!script[num]) console.log('Script inválido'); 
else require(script[num - 1]);



