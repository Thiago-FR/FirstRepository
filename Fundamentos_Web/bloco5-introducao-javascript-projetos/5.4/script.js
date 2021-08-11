let corFundo = document.getElementById('corFundo');
let corTexto = document.getElementById('corText');
let rangeTexto = document.getElementById('rangeText');
let body = document.getElementById('container');


corFundo.addEventListener('input', function(){
  body.style.background = this.value;
});

corTexto.addEventListener('input', function(){
  body.style.color = this.value;
});

rangeTexto.addEventListener('input', function(){
  body.style.fontSize = this.value + 'px';
});


