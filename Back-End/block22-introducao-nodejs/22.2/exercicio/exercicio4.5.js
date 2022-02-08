const fs = require('fs').promises;
const charactersJson = './simpsonFamily.json';

const nameChar = 'Nelson Muntz';

function characters(dataJson, name) {
  return new Promise((resolve, reject) => {
    const newJson = [...dataJson, { id: (Number(dataJson[dataJson.length - 1].id) + 1).toString(), name }]
    if (newJson) return resolve(newJson);
    return reject('Erro')
  });
};

fs.readFile(charactersJson)
  .then(data => {
    const dataJson = JSON.parse(data);
    return characters(dataJson, nameChar);
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