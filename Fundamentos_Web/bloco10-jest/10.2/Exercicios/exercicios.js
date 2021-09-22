
// Exercício 1
const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

// Exercício 2

const users = [
  { id: 1, name: 'Mark' },
  { id: 2, name: 'Paul' },
];

const findUserById = (id) => new Promise((resolve, reject) => {
  const result = users.find((user) => user.id === id);

  if (result) {
    return resolve(result);
  }

  return reject(new Error(`User with ${id} not found.`));
});

const getUserName = async (userId) => findUserById(userId).then((user) => user.name);

// Exercicio 4
const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

// Execício 6.1

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    const arrayAnimal = Animals.find((animal) => animal.name === name);
    if (arrayAnimal) return resolve(arrayAnimal);
    return reject('Nenhum animal com esse nome!');
  })
);

const getAnimal = (name) => {
  return findAnimalByName(name);
};

// Execício 6.2

const findAnimalByIdade = (idade) => (
  new Promise((resolve, reject) => {
    const arrayAnimal = Animals.filter((animal) => animal.age === idade);
    if (arrayAnimal.length > 0) return resolve(arrayAnimal);
    return reject(new Error('Nenhum animal com essa idade!'));
  })
);

module.exports = {
  uppercase,
  getUserName,
  getRepos,
  getAnimal,
  findAnimalByIdade,
};