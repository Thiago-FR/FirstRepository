//Exercício
console.log("-------Exercício 1-------------");
let nome = "arara";

palindromo(nome);

function palindromo(nomeP){

  let result = [];
  let nomeArray = [];
  let nomeReverse = ""

  for(let i = 0; i < nomeP.length; i+=1){
    let aux = nomeP[i];
    nomeArray.push(aux);
  }
  result = nomeArray.reverse()
  
  for(let i = 0; i < result.length; i+=1){
    nomeReverse += result[i];
  }

  if(nomeP == nomeReverse){
    console.log(true);
  }else{
    console.log(false);
  }
}
console.log();

console.log("-------Exercício 2-------------");

let array = [2, 3, 6, 7, 10, 1];

maior(array);

function maior(array){
  let maior = 0;

  for(let i in array){

    if(array[i] >= maior){

      maior = i;
    }
  }
  console.log(maior);

}

console.log();

console.log("-------Exercício 3-------------");
let arrayMenor = [2, 4, 6, 7, 10, 0, -3];

menor(arrayMenor);

function menor(array){
  let menor = 0;

  for(let i in array){

    if(array[i] <= menor){

      menor = i;
    }
  }
  console.log(menor);

}

console.log();

console.log("-------Exercício 4-------------");
let arrayNome = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

letras(arrayNome);

function letras(arrayNome){
  let qtdLetras = 0;

  for(let i in arrayNome){
    let nome = arrayNome[i]
    let cont = 0;
    for(let j = 0; j < arrayNome[i].length; j+=1){
      cont += 1;
      if(cont > qtdLetras){
        qtdLetras = cont;
      }
    }
  }

  console.log(qtdLetras);
}
console.log();
console.log("-------Exercício 5-------------");
let arrayInt = [2, 3, 2, 5, 8, 2, 3];

repet(arrayInt);

function repet(array){
  mairoNum = 0;
  for(let i in array){
    contRepet = 0;
    for(let j = 0; j< array.length; j+=1){
      if(array[i] == array[j]){
        contRepet += 1;
      }
      if(contRepet > mairoNum){
        mairoNum = array[i];
      }
    }
  }

  console.log(mairoNum);
}

console.log();
console.log("-------Exercício 6-------------");

let num = 5;

soma(num);

function soma(num){
  let contNum = 0;
  for(let i = 0; i <= num; i +=1){
    contNum += i;
  }
  console.log(contNum);
}

console.log();
console.log("-------Exercício 7-------------");