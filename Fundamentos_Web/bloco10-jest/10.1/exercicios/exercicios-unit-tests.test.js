const {
  sum,
  myRemove,
  myRemoveWithoutCopy,
  myFizzBuzz,
} = require('./exercicios-unit-tests');

const exercicios = require('./exercicios-unit-tests');;

describe('Exercicios Testes Unitarios', () => {
  it('Soma de dois números', () => {
    expect(sum(1,2)).toBe(3);
    expect(sum(0,0)).toBe(0);
    expect(() => sum(4, '5')).toThrow('parameters must be numbers');
  });

  it('Exclui item', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toContain(3);
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('Exclui item caso Exista', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toContain(3);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('fizzBuzz, Bug!', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(9)).toBe('fizz');
    expect(myFizzBuzz(25)).toBe('buzz');
    expect(myFizzBuzz(8)).toEqual(8);
    expect(myFizzBuzz('25')).toBeFalsy();
  });

  it('Comparacao de Objectos', () => {
    expect(exercicios.obj1).toEqual(exercicios.obj2);
    expect(exercicios.obj1).not.toEqual(exercicios.obj3);
  });
});