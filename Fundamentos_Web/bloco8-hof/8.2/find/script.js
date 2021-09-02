// Exercício 1

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  // Adiciona seu código aqui
   return numbers.find((number) => number % 3 === 0 && number % 5 === 0);
}

console.log(findDivisibleBy3And5())

// Exercício 2

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  return names.find((name) => name.length === 5);
}

console.log(findNameWithFiveLetters());