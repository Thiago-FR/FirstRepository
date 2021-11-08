const retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);

const divisivelPorDois = () => (retornaNumeroAleatorio() % 2) === 0;

const divPrimeiroPeloSegundo = (a, b) => a / b;

const stringUpperCase = (string) => string.toUpperCase();

const chamaFetch = async () => {
  const API_URL = 'https://dog.ceo/api/breeds/image/random';
  const result = await fetch(API_URL)
      .then((response) => response.json())
      .then((data) => data);

  return result;
}

; // Wonder Woman

module.exports = { retornaNumeroAleatorio, divisivelPorDois, divPrimeiroPeloSegundo, stringUpperCase, chamaFetch };