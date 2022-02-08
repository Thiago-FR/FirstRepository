const fs = require('fs').promises;
const readline = require('readline-sync');

const file = readline.questionPath('Insira o nome do arquivo: ');

let charName1 = '';
let charName2 = '';

function characters(data, name1, name2) {
  return new Promise((resolve) => {
    const newData = [];
    data.split(' ').forEach(word => {
      if (word === name1) word = name2;
      newData.push(word);
    });    
    resolve(newData.join(' '));
  });
};

fs.readFile(file)
  .then(data => {
    console.log(`Arquivo encontrado`);
    charName1 = readline.question('Palavra a ser substituída: ');
    charName2 = readline.question('Nova palavra: ');
    return characters(data.toString(), charName1, charName2);
  })
  .then(newData => {
    const newSave = readline.question('nome do arquivo de destino: ');
    return { newData, newSave }
  })
  .then(({ newData, newSave }) => {
    return fs.writeFile(`./${newSave}.txt`, newData);
  })
  .then(() => {
    console.log(`Arquivo atualizado com sucesso!`);
  })
  .catch(err => {
    console.error(`Erro: ${err}`);
    process.exit(1);
  });
