let salario = 1000;

let inss;
let ir = 0;

//Desconto INSS
if(salario <= 1556.94){
  inss = (salario * 8)/100
  descontoInss = "Nao"
}else if(salario > 1556.94 && salario <= 2594.92){
  inss = (salario * 9)/100
}else if(salario > 2594.92 && salario <= 5189.82){
  inss = (salario * 11)/100
}else if(salario > 5189.82){
  inss = 570.88
}

//Calculo INSS
salario -= inss;

//Desconto IR
if(salario > 1903.98 && salario <= 2826.65){
  ir = (salario * 7.5)/100
  ir-= 142.8
}else if(salario > 2826.65 && salario <= 3751.05){
  ir = (salario * 15)/100
  ir-= 354.8
}else if(salario > 3751.05 && salario <= 4664.68){
  ir = (salario * 22.5)/100
  ir-= 636.1
}else if(salario > 4664.68){
  ir = (salario * 27.5)/100
  ir-= 869.36
}else{
  descontoIr = "Nao"
}

//Calculo IR
salario -= ir;

//Resultado
console.log("Desconto INSS:   R$ "+inss.toFixed(2));
console.log("Desconto IR:     R$ "+ir.toFixed(2));
console.log("Salario Liquido: R$ "+salario.toFixed(2));




