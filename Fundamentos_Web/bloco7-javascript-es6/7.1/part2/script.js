// Exercício 1

const number = 5;

const fatoral = (number) => {
  let num = number;
  for (let index = number-1; index > 1; index -= 1) {
    num *= index;
  }
  return  num;
};

console.log(fatoral(number));

// Bonus

const fatorial = number => number === 0 ? 1 : number * fatorial(number - 1);

console.log(fatorial(5));

//Exercício 2

const longestWord = "Antônio foi no banheiro e não sabemos o que aconteceu";

const maiorPalavra = palavra => {
  let cont = '';
  for (let index = 0 ; index < palavra.length; index += 1) {
    palavra.length > cont.length ? cont = palavra[index] : cont;
  }
  return cont;
};

console.log(maiorPalavra(longestWord.split(' ')));

// Exercício 4

const palavra = 'Tryber x aqui!';

const recebeS = (string, sSubs) => {
  for (let index = 0 ; index < string.length; index += 1) {
    string[index] === 'x' ? string[index] = sSubs : string;
  }
  return string.join(' ');
};

console.log(recebeS(palavra.split(' '), 'passaro'));

// Exercício 3

let clickCount = 0;
const paragrafo = document.querySelector('p');
const button = document.querySelector('button');

paragrafo.innerHTML = clickCount;

button.addEventListener('click', () => {
  clickCount += 1;
  paragrafo.innerHTML = clickCount;
});



