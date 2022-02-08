const fs = require('fs').promises;

const arr = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
const createFilePromises = arr.map((string, index) => {
  fs.writeFile(`./file${index + 1}.txt`, string);
});
const readFilePromises = [
  fs.readFile('./file1.txt'),
  fs.readFile('./file2.txt'),
  fs.readFile('./file3.txt'),
  fs.readFile('./file4.txt'),
  fs.readFile('./file5.txt')
];

Promise.all(createFilePromises)
  .then(() => {
    return console.error(`Sucesso na escrita`);
  })
  .then(() => {
    return Promise.all(readFilePromises)
  })
  .then((content) => {
    return content.reduce((acc, curr) => {
      return acc + ' ' + curr.toString();
    });
  })
  .then((content) => {
    return console.error(`Sucesso na leitura: ${content}`);
  })
  .catch(err => {
    console.error(`Erro ao ler os arquivo ${err}`);
  });





