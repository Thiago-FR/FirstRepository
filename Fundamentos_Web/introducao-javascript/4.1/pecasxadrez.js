let peca = "CAVALO";

let PECA = peca.toLowerCase();

switch(PECA){
  case "bispo": 
  console.log("Movimento Diagnal");
  break;

  case "rei": 
  console.log("Uma Casa em qualquer direção");
  break;

  case "rainha": 
  console.log("Movimento em qualquer direção");
  break;

  case "cavalo": 
  console.log("Movimento Movimenta 4 casas em L");
  break;

  case "peao": 
  console.log("Movimento uma casa para sentido frontal");
  break;

  case "torre": 
  console.log("Movimento Frontal ou Lateral");
  break;
}
