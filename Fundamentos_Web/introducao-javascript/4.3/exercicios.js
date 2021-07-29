//Exercicio 1
console.log("------Exercicios 1-------");
let n = 5;
let cont = "";

 for(let i = 0; i < n; i += 1){
   cont = "";
   for(let j = 0; j < n; j += 1){
      cont += "*";
  }
  console.log(cont);  
}

//Exercicio 2
console.log("------Exercicios 2-------");
let n2 = 5;
let cont2 = "";
for(let i =  0; i < n2; i+=1){
  cont2 += "*";
  console.log(cont2);
}

//Exercicio 3
console.log("------Exercicios 3-------");
let n3 = 5;
let contE = n3 - 1;
let cont3 = "";
for(let i = 0; i < n3; i += 1){
  cont3 = "";
  for(let j = 0; j < n3; j += 1){
     cont3 += " ";     
     if(j == contE){
       for(let k = j; k < n3; k += 1){
          cont3 += "*"
       }      
      contE -= 1;
      break;
     }
 }
 console.log(cont3);  
}

//Exercicio 4
console.log("------Exercicios 4-------");
let n4 = 5;

let medio = (n4 + 1) / 2;
let esq = medio;
let dir = medio;
let cont4 = "";

for(let i = 0; i <= medio; i+=1){
  cont4 = "";
  for(let j = 0; j <= n4; j +=1){
    if(j > esq && j < dir){
      cont4 += "*"
    }else{
      cont4 += " ";
    }
  }
  console.log(cont4);  
  dir += 1;
  esq -= 1;
}


//Exercicio 5
console.log("------Exercicios 5 Bonus-------");

let n5 = 5;

let medio5 = (n4 + 1) / 2;
let esq5 = medio5;
let dir5 = medio5;
let cont5 = "";

for(let i = 1; i <= medio5; i+=1){
  cont5 = "";
  for(let j = 1; j <= n5; j +=1){
    if(j == esq5 || j == dir5 || i == medio5){
      cont5 += "*"
    }else{
      cont5 += " ";
    }
  }
  console.log(cont5);  
  dir5 += 1;
  esq5 -= 1;
}

//Exercicio 6
console.log("------Exercicios 6 Bonus-------");
let n6 = 391;
let cont6 = 0;
let div6 = n6;
let result6 = 0;

for(let i = 0; i <= n6; i +=1){
    result6 = n6%div6;
    if(result6 == 0){
      cont6 +=1;
    }
    div6 -= 1;
}

if(cont6 === 2 ){
  console.log(cont6);
  console.log("É um número primo");
}else{
  console.log(cont6);
  console.log("Não é um número primo");
}

