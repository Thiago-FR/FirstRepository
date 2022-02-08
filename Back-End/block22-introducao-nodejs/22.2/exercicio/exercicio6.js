const fs = require('fs').promises;
const readline = require('readline-sync');

const file = readline.questionPath('Insira o nome do arquivo: ');


fs.readFile(file)
  .then(data => {
    console.log(`Sucesso: ${data.toString()}`);
  })
  .catch(err => {
    console.log('Não foi possível ler o arquivo');
    console.error(`Erro: ${err}`);
    process.exit(1);
  });




