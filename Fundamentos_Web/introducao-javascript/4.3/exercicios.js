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



