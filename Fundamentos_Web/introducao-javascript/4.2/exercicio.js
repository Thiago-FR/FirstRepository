let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Execerício 1
console.log("-----Exercício 1------");
for(let i = 0; i < numbers.length; i += 1){
  console.log(numbers[i]);
}

//Exercício 2
console.log("-----Exercício 2------");
let cont = 0;
for(let i = 0; i < numbers.length; i += 1){
  cont += numbers[i];  
}
console.log(cont);

//Exercício 3
console.log("-----Exercício 3------");
let cont2 = 0;
let media;
for(let i = 0; i < numbers.length; i += 1){
  cont2 += numbers[i];  
}
media = cont2/numbers.length;
console.log(media);

//Exercício 4
console.log("-----Exercício 4------");
if(media > 20){
  console.log("Valor maior que 20");
}else{
  console.log("Valor menor que 20");
}

//Exercício 5
console.log("-----Exercício 5------");
let maior = 0;
for(let i = 0; i < numbers.length; i += 1){
  if(numbers[i] >= maior){
    maior = numbers[i];
  }
}
console.log(maior);

//Exercício 6
console.log("-----Exercício 6------");
let contImpar = 0;
let impar;
for(let i = 0; i < numbers.length; i += 1){
  impar = numbers[i]%2;
  if(impar == 1){
    contImpar += 1;
  }
}
if(contImpar > 0){
  console.log("Numeros Impar = "+contImpar);
}else{
  console.log("Nenhum valor impar encontrado");
}
//Exercício 7
console.log("-----Exercício 7------");
let menor = 0;
for(let i = 0; i < numbers.length; i += 1){
  if(i == 0){
    menor = numbers[i];
  }
  if(numbers[i] <= menor){
    menor = numbers[i];
  }
}
console.log(menor);

//Exercício 8
console.log("-----Exercício 8------");

let num = [];

for(let i = 0; i < 25; i+=1){
  num.push(i+1);
  console.log(num[i]);
}

//Exercício 9
console.log("-----Exercício 9------");
let div;
for(let i = 0; i < num.length; i+=1){
  div = num[i]/2;
  console.log(div);
}