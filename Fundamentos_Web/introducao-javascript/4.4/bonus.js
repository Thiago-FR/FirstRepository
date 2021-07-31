//Exercício Bonus
console.log("---------Exercício 1 Bonus----------");

let string = "XC";

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


console.log(aux);