const assert = require('assert');

const greetPeople = (people) => {
  let greeting = 'Hello ';
  const newPeople = [];

  for (const person in people) {
    newPeople.push(greeting + people[person]); 
  }
  return newPeople;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
const output = greetPeople(parameter);

assert.strictEqual(typeof greetPeople, 'function');
assert.deepStrictEqual(output, result, 'Erro Please');

