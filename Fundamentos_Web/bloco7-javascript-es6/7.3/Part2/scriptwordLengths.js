const assert = require('assert');
// escreva a função wordLengths aqui

const wordLengths = palavra => {
  const newWorld = [];
  for (let index = 0; index < palavra.length; index += 1) {
    const aux = palavra[index];
    newWorld.push(aux.length);
  }
  return newWorld;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);