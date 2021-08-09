// 1 - Acesse o elemento elementoOndeVoceEsta .
let elentoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

//2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let pai = elentoOndeVoceEsta.parentElement;
pai.style.background = "blue"

//3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let primeiroFilhoDoFilho = elentoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = "ola";

//4 - Acesse o primeiroFilho a partir de pai .
let primeiroFilho = pai.firstElementChild;

//5 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
let filhoDireto = elentoOndeVoceEsta.previousElementSibling;

//6 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
let atencao = elentoOndeVoceEsta.nextSibling;

//7 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
let terceiroFilho = elentoOndeVoceEsta.nextElementSibling;

//8 - Agora acesse o terceiroFilho a partir de pai .
terceiroFilho2 = pai.lastElementChild.previousElementSibling;

//Exercício Criando e Add. Elementos
//1 - Crie um irmão para elementoOndeVoceEsta.
let paiDeTodos = document.getElementById('pai');
let createIrmao = document.createElement('section');

createIrmao.id = "createIrmao";

paiDeTodos.appendChild(createIrmao);

//2 - Crie um filho para elementoOndeVoceEsta .
let createFilho = document.createElement('section');

createFilho.id = "createFilho";

elentoOndeVoceEsta.appendChild(createFilho);

//3 - Crie um filho para primeiroFilhoDoFilho .
primeiroFilhoDoFilho.appendChild(createFilho);
//console.log(elentoOndeVoceEsta.firstElementChild.firstElementChild);

//4 - A partir desse filho criado, acesse terceiroFilho .
let FilhoDoFilhoDoFilho = elentoOndeVoceEsta.firstElementChild.firstElementChild;
let acessoTerceiroFilho = FilhoDoFilhoDoFilho.parentElement.parentElement.nextElementSibling;
console.log(acessoTerceiroFilho);





    