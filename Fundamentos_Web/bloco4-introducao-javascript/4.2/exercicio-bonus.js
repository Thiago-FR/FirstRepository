//Exercício 1 Bonus

console.log("-------------Exercício 1 Bonus----------");
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log(numbers);

//Exercício 2 Bonus
console.log("-------------Exercício 2 Bonus----------");
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);

//Exercício 3 Bonus
console.log("-------------Exercício 3 Bonus----------");
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index += 1) {

  if(numbers[index+1] == null){
    numbers[index] = numbers[index] * 2;
  }else{
      let aux = numbers[index] * numbers[index+1];
      numbers[index] = aux;
  }  
}

console.log(numbers);