let num1 = 50;
let num2 = 100;
let lucro;
let lucroTotal;

let mult = 1000;
let porcent = 20;

//Calculo do imposto
num1 += (num1*porcent)/100;

lucro = num2 - num1;

lucroTotal = lucro * mult;

if(num1 < 0 || num2 < 0){
  console.log("Valor incorreto");
}else{
  console.log("Lucro final de: "+lucroTotal);
}


