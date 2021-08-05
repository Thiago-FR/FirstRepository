//Exercício
console.log("--------- Exercício 1----------");
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};

for(let index in names){
  console.log("Olá "+names[index]);
}
console.log();
console.log("--------- Exercício 2----------");
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for(let index in car){
  console.log(index, car[index]);
}