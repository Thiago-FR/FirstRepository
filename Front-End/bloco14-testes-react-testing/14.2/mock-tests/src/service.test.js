const math = require('./service');
jest.mock('./service');


test('mockar retorno de função aleatoria', () => {
  math.retornaNumeroAleatorio = jest.fn().mockReturnValue(10);
  math.retornaNumeroAleatorio();

  expect(math.retornaNumeroAleatorio).toHaveBeenCalled();
  expect(math.retornaNumeroAleatorio()).toBe(10);
  expect(math.retornaNumeroAleatorio).toBeCalledTimes(2);
});

test('Retorno de divisão', () => {
  math.divPrimeiroPeloSegundo = jest.fn().mockImplementation((a, b) => a * b);
  expect(math.divPrimeiroPeloSegundo(10, 5)).toBe(50);
  expect(math.divPrimeiroPeloSegundo).toBeCalledTimes(1);
});

test('Multiplicação de 3 parametros', () => {
  const mockMult = jest.spyOn(math, 'retornaNumeroAleatorio')
    .mockImplementation((a, b, c) => a * b * c);
  
  expect(mockMult(10, 5, 1)).toBe(50);
  expect(mockMult).toBeCalledTimes(1);

  mockMult.mockReset();

  const mockMult2 = jest.spyOn(math, 'retornaNumeroAleatorio')
    .mockImplementation((a, b) => a * b);

    expect(mockMult2(10, 5)).toBe(50);
    expect(mockMult2).toBeCalledTimes(1);
});

test('Manipulando String', () => {
  const mockMult = jest.spyOn(math, 'stringUpperCase')
    .mockImplementation((string) => string.toLowerCase());
  
  expect(mockMult('THIAGO')).toBe('thiago');
  expect(mockMult).toBeCalledTimes(1);

  mockMult.mockReset();
  mockMult.mockImplementation((string) => string.substr(-1,1));
  expect(mockMult('STRING')).toBe('G');

  mockMult.mockReset();
  mockMult.mockImplementation((string1, string2, string3) => string1.concat(string2, string3));
  expect(mockMult('STRING1', 'STRING2', 'STRING3')).toBe('STRING1STRING2STRING3');

  mockMult.mockReset();
  expect(mockMult('thiago')).toBe(undefined);
  expect(mockMult).toBeCalledTimes(1);
});

