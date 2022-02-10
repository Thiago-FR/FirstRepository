const { expect } = require('chai');
const typeNumber = require('../typeNumber');

describe('A função irá receber um número como parâmetro e retornar uma string como resposta', () => {
  it('Número maior que 0 deverá retornar "positivo', () => {
    const result = typeNumber(10);

    expect(result).equals('positivo');
  });

  it('Número menor que 0 deverá retornar "negativo"', () => {
    const result = typeNumber(-3);

    expect(result).equals('negativo');
  });

  it('Número igual a 0 deverá retornar "neutro"', () => {
    const result = typeNumber(0);

    expect(result).equals('neutro');
  });
});

describe('A função irá receber um parâmetro diferente de número e retornar uma string como resposta', () => {
  it('String como parâmetro deve retornar "o valor deve ser um número"', () => {
    const result = typeNumber('string');

    expect(result).to.be.a('string');
    expect(result).to.be.equals('o valor deve ser um número');
  });
});