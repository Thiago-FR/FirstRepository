const assert = require('assert');
// escreva a função removeMiddle aqui

function removeMiddle(palavra) {
  let output;
  for (let index = 0; index < palavra.length; index += 1) {
    if ((palavra.length + 1) / 2 === index ) {
      output = palavra.splice(index - 1, 1);
    }    
  }
  return output;
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);


assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);