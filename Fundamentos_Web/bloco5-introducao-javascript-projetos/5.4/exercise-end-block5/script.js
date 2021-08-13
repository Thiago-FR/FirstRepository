window.onload = function() {
  let basePyramid = 15;
  let numberOfLines = (basePyramid + 1) / 2; // 5
  let controlLeft = numberOfLines; // 5
  let controlRight = numberOfLines; // 5

  numberLines(numberOfLines);

  let lines = document.querySelectorAll(".line");

  updateVisit();  

  fillTriangle(lines);

  function numberLines(number){
    let line = document.querySelector('.triangle');        
    for(let index = 0; index < number; index += 1){
      let div = document.createElement('div');
      div.className = 'line';
      div.style.padding = '-100px'
      line.appendChild(div);
    }
  }
  
  // Atualiza a quantidade de visitar no site, utilizando o LocalStorage
  function updateVisit() {
    if (typeof (Storage) != "undefined") {
      if(localStorage.count !== undefined) {
        let count = parseInt(localStorage.count);
        count+=1;
        localStorage.count = count;
        document.getElementById("count").innerHTML = count;
      } else {
        localStorage.count = 1;
        document.getElementById("count").innerHTML = 1;
      }
    } else {
      document.write("Sem suporte para Web Storage");
    }  
  }

  // Passa por todos as linhas (div com class line) e preenche o triangulo
  function fillTriangle(lines) {
    for(let index = 0; index < lines.length; index += 1) {
      fillLine(lines[index]);
      controlRight += 1;
      controlLeft -= 1;
    }
  }

  // Cria uma caixa com base nas diferentes classes
  function createBox(className) {
    let box = document.createElement("div");
    box.className = className;
    
    return box;
  }

  // Preenche uma linha
  function fillLine(divLine) {
    for (let lineColumn = 1; lineColumn <= basePyramid; lineColumn += 1) {
      if(lineColumn >= controlLeft && lineColumn <= controlRight) {
        let box = createBox("box");
        box.style.backgroundColor = gerar_cor();
        divLine.appendChild(box);
      } else {
        divLine.appendChild(createBox("box-empty"));
      }
    }
  }

  function gerar_cor(opacidade = 1) {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    
    return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
 }
}