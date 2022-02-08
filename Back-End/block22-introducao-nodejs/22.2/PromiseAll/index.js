const fs = require('fs').promises;

Promise.all([
  fs.readFile('./file01.txt'),
  fs.readFile('./file02.txt'),
  fs.readFile('./file03.txt')
])
  .then(([file01, file02, file03]) => {
    const fileSizeSum = file01.byteLength + file02.byteLength + file03.byteLength;
    console.log(`
    Lido o arquivo 1 ${file01.byteLength} bytes
    Lido o arquivo 2 ${file02.byteLength} bytes
    Lido o arquivo 3 ${file03.byteLength} bytes
    Soma dos 3 arquivo ${fileSizeSum} bytes`);
  })
  .catch(err => {
    console.error(`Erro ao ler os arquivo ${err.message}`);
  });



