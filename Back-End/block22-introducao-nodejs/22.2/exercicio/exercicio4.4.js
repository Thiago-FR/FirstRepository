const fs = require('fs').promises;
const charactersJson = './simpsons.json';

const numChar1 = 1;
const numChar2 = 4;

function characters(dataJson, id1, id2) {
  return new Promise((resolve, reject) => {
    const newJson = dataJson.filter(idChar => idChar.id >= id1 && idChar.id <= id2)
    if (newJson) return resolve(newJson);
    return reject('Erro')
  });
};

fs.readFile(charactersJson)
  .then(data => {
    const dataJson = JSON.parse(data);
    return characters(dataJson, numChar1, numChar2);
  })
  .then(content => {
    return fs.writeFile('./simpsonFamily.json', JSON.stringify(content))
   })
   .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch(err => {
    console.error(`Erro: ${err}`);
    process.exit(1);
  });