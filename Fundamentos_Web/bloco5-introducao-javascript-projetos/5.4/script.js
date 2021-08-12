//Criação das Section e Inputs Via Script
/*let mainContent = document.querySelector('main');
let sectionOne = document.createElement('section');
sectionOne.className = 'inputs';
mainContent.appendChild(sectionOne);

let labelCorFundo = document.createElement('label');
labelCorFundo.for = 'cor';
labelCorFundo.innerHTML = 'Fundo2';
sectionOne.appendChild(labelCorFundo);

let inputCorFundo = document.createElement('input');
inputCorFundo.type = 'color';
inputCorFundo.id = 'corFundo';
labelCorFundo.appendChild(inputCorFundo);*/

let corFundo = document.getElementById('corFundo');
let corTexto = document.getElementById('corText');
let rangeTexto = document.getElementById('rangeText');
let rangeHeight = document.getElementById('rangeHeight');
let fonte = document.getElementById('fonte');
let body = document.getElementById('container');

initialRenderization();

corFundo.addEventListener('input', function(){
  body.style.background = this.value;
  let background = body.style.background;
  addPhraseToLocalStorage("background",background);
});

corTexto.addEventListener('input', function(){
  body.style.color = this.value;
  let corText = body.style.color;
  addPhraseToLocalStorage("corText",corText);
});

rangeTexto.addEventListener('input', function(){
  body.style.fontSize = this.value + 'px';
  let tamanhoText = body.style.fontSize;
  addPhraseToLocalStorage("tamanhoText",tamanhoText);
});

rangeHeight.addEventListener('input', function(){
  body.style.lineHeight = this.value + 'px';
  let entreLinhas = body.style.lineHeight;
  addPhraseToLocalStorage("entreLinhas",entreLinhas);
});

fonte.addEventListener('input', function(){
  body.style.fontFamily = this.value;
  let fontFamily = body.style.fontFamily;
  addPhraseToLocalStorage("fontFamily",fontFamily);
});

function addPhraseToLocalStorage(string,value) {
  localStorage.setItem(string, JSON.stringify(value));
};

function initialRenderization() {
  if (localStorage.getItem('background') === localStorage.length) {
    localStorage.setItem('background', JSON.stringify());
  } else {
    const phrasesList = JSON.parse(localStorage.getItem('background'));
    body.style.background = phrasesList;
  }

  if (localStorage.getItem('corText') === localStorage.length) {
    localStorage.setItem('corText', JSON.stringify());
  } else {
    const phrasesList = JSON.parse(localStorage.getItem('corText'));
    body.style.color = phrasesList;
  }

  if (localStorage.getItem('tamanhoText') === localStorage.length) {
    localStorage.setItem('tamanhoText', JSON.stringify());
  } else {
    const phrasesList = JSON.parse(localStorage.getItem('tamanhoText'));
    body.style.fontSize = phrasesList;
  }

  if (localStorage.getItem('entreLinhas') === localStorage.length) {
    localStorage.setItem('entreLinhas', JSON.stringify());
  } else {
    const phrasesList = JSON.parse(localStorage.getItem('entreLinhas'));
    body.style.lineHeight = phrasesList;
  }

  if (localStorage.getItem('fontFamily') === localStorage.length) {
    localStorage.setItem('fontFamily', JSON.stringify());
  } else {
    const phrasesList = JSON.parse(localStorage.getItem('fontFamily'));
    body.style.fontFamily = phrasesList;
  }
};



