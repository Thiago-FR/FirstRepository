//Exercício Bonus
console.log("---------Exercício 1 Bonus----------");

let string = "V";

let convert = string.split("");

let numeros = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
}

checkNum(string,numeros);

function checkNum(string,numeros){

  let aux = 0;

  for(let firstRod in numeros){
    if(string === firstRod){
      aux = numeros[firstRod];
    }
  }

  if(aux === 0){
    for(let index in convert){
      for(let j in numeros){
        if(j == convert[index]){
          if(aux === 0){
            aux += numeros[j]
          }else if(numeros[j] > aux){
            aux = numeros[j] - aux;
          }else if(numeros[j] <= aux){
            aux = numeros[j] + aux;
          }      
        }
      }
    }
  }
  return console.log(aux);
}

console.log();

console.log("---------Exercício 2 Bonus----------");

let vector = [[1,2],[3,4,5,6],[7,8,9,10]];

arrayOfNumbers(vector);

function arrayOfNumbers(vector){
  let aux = [];
  let calc = [];
  for(let index in vector){
    //console.log(index, vector[index]);
    aux = vector[index];
    for(let j in aux){
      let result = aux[j]%2;
      //console.log(j, aux[j]);
      if(result == 0){
        calc.push(aux[j]);
      }
    }
  }
  vector.push(calc);
  console.log(vector);

}

console.log();

console.log("---------Exercício 3 Bonus----------");



const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

let cesta = {
  
}

verificaCesta(basket,cesta);

function verificaCesta(basket,cesta){
  for(let index in basket){
    let temNaCesta = false;
    for(let j in cesta){    
      if(basket[index] == j){
        cesta[j] += 1;
        temNaCesta = true;
        break;
      }    
    }
    if(temNaCesta == false){
      cesta[basket[index]] = 1;
    }
  }
  console.log(cesta);
}



