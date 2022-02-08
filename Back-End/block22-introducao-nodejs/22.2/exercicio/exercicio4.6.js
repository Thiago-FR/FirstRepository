const fs = require('fs').promises;
const charactersJson = './simpsonFamily.json';

const charName1 = 'Maggie Simpson';
const charName2 = 'Nelson Muntz';

function characters(dataJson, name1, name2) {
  return new Promise((resolve, reject) => {
    const newJson = dataJson.reduce((acc, curr) => {
      if (curr.name === name2) curr.name = name1;
      return [...acc, curr]
    }, []);
    if (newJson) return resolve(newJson);
    return reject('Erro')
  });
};

fs.readFile(charactersJson)
  .then(data => {
    const dataJson = JSON.parse(data);
    return characters(dataJson, charName1, charName2);
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