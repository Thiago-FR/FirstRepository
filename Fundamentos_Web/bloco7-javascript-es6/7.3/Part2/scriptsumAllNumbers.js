const assert = require('assert');
// escreva a função sumAllNumbers aqui

const sumAllNumbers = number => {
  let cont = 0;
  for (let index = 0; index < number.length; index += 1) {
    cont += number[index];
  }
  return cont;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);