const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
const array = [1, 2, 3, 4];

assert.deepStrictEqual(myRemove(array, 5), [1,2,4], 'Erro Please');