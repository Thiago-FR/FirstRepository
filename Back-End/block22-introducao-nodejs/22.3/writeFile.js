const fs = require('fs');

const writeFile = (file, text) => {
  fs.writeFileSync(file, text);
  return 'ok';
};

module.exports = writeFile;
