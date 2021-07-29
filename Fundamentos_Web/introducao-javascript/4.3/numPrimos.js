let n6 = 300;
let cont6 = 0;
let div6 = n6;
let result6 = 0;
let numPrimo = [];

for(let i = n6; i > 0; i -=1){
    div6=i;
    cont6 = 0;
    for(let j = i; j > 0; j-=1){
        result6 = i%div6;
        if(result6 == 0){
          cont6 +=1;
        }
        if(cont6 > 2){
          break;          
        }else if(cont6 == 2 && div6 == 1){
          numPrimo.push(i);
          break;
        }
        div6 -= 1;
    }
}

for(let i = 1; i < numPrimo.length; i +=1){
  for(let j = 0; j < i; j+=1){
    if(numPrimo[i] < numPrimo[j]){
      let pos = numPrimo[i];
      numPrimo[i] = numPrimo[j];
      numPrimo[j] = pos;
    }
  }
}

console.log(numPrimo);