const fs = require('fs').promises;

const nomeDoArquivo = './simpsons.json';

fs.readFile(nomeDoArquivo)
  .then(data => {
    JSON.parse(data).forEach(character => {
      console.log(`${character.id} - ${character.name}`);
    });
  })
  .catch(err => {
    console.error(`Não é possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1);
  });