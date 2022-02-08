const fs = require('fs').promises;

const nomeDoArquivo = './file03.txt';

fs.readFile(nomeDoArquivo, 'utf8')
  .then(data => {
    console.log(`Conteúdo do arquivo: ${data}`);
  })
  .catch(err => {
    console.error(`Não é possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1);
  });