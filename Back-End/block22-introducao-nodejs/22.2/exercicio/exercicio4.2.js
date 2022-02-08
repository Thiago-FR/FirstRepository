const fs = require('fs').promises;
const readline = require('readline-sync');
const charactersJson = './simpsons.json';

const numChar = readline.questionInt('Insira o Id do personagem a ser encontrado: ')

function characters(dataJson, id) {
  return new Promise((resolve, reject) => {
    const num = dataJson.find(idChar => idChar.id === id.toString())
    if (num) return resolve(num);
    return reject('Personagem não encontrado');
  });
};

fs.readFile(charactersJson)
  .then(data => {
    const dataJson = JSON.parse(data);
    return characters(dataJson, numChar);
  })
  .then(content => {
    console.log(`${content.id} - ${content.name}`);
   })
  .catch(err => {
    console.error(`Erro: ${err}`);
    process.exit(1);
  });