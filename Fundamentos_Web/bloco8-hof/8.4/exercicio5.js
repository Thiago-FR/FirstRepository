const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  //return names.forEach((name) => name.toUpperCase())
  return names.reduce((arr, names) => arr + names.split('').reduce((acuum, current) => {
    if (current === 'a' || current === 'A') return acuum + 1;
    return acuum;
 },0),0);
}

console.log(containsA());
assert.deepStrictEqual(containsA(), 20);








