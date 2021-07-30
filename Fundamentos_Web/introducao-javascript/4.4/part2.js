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



