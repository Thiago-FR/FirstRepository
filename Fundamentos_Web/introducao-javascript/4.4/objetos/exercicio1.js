//Exercicio
console.log("-------------Exercicio 1--------------");
console.log();

let jogadora = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: {golde: 2, silver: 3}
}

console.log("-------------Exercicio 2--------------");
console.log("A jogadora "+jogadora.name+" "+jogadora.lastName+" tem "+jogadora.age+" Anos de idade.");
console.log();

console.log("-------------Exercicio 3--------------");

jogadora['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];
console.log(jogadora.bestInTheWorld);
console.log();

console.log("-------------Exercicio 4--------------");
console.log("A jogadora "+jogadora.name+" "+jogadora.lastName+" Foi eleita a melhor do mundo "+jogadora.bestInTheWorld.length+" vezes.");
console.log();
console.log("-------------Exercicio 5--------------");
console.log("A jogadora possui "+jogadora.medals.golde+" de ouro e "+jogadora.medals.silver+" de prata");