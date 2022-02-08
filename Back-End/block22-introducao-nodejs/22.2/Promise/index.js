const fs = require('fs');

function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      return resolve(content);
    });
  });
}

readFilePromise('./file01.txt')
  .then(content => {
    console.log(`Lido o arquivo com ${content.byteLength} bytes`);
    return readFilePromise('./file02.txt');
  })
  .then(content => {
    console.log(`Lido o arquivo com ${content.byteLength} bytes`);
    return readFilePromise('./file03.txt');
  })
  .then(content => {
    console.log(`Lido o arquivo com ${content.byteLength} bytes`);
  })
  .catch(err => {
    console.log(`Erro ao ler arquivo ${err.message}`);
  });

