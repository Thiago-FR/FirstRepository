let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//Exercício
console.log("-------------Exercício 1-------------");
console.log("Bem-Vinda, "+info.personagem);
console.log;

console.log("-------------Exercício 2-------------");
info['recorrente'] = "Sim";
for(let index in info){
  console.log(index, info[index]);
}
console.log;
console.log("-------------Exercício 3-------------");
for(let index in info){
  console.log(index);
}
console.log;
console.log("-------------Exercício 4-------------");
for(let index in info){
  console.log(info[index]);
}
console.log;
console.log("-------------Exercício 5-------------");

let infoTio = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: "Nao",
};

console.log(info.personagem+" e "+infoTio.personagem);
console.log(info.origem+" e "+infoTio.origem);
console.log(info.nota+" e "+infoTio.nota);
if(info.recorrente == "Sim" && infoTio.recorrente == "Sim"){
  console.log("Ambos recorrentes");
}else if(info.recorrente == "Sim" || infoTio.recorrente == "Sim"){
  console.log(info.personagem+" É recorrente? "+info.recorrente+" e "+infoTio.personagem+" É recorrente? "+infoTio.recorrente);
}
