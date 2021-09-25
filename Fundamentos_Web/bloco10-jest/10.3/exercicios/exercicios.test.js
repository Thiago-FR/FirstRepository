
// Exercicio 1
const exercicio1 = require('./exercicio1');

const exercicio4 = require('./exercicio4');

const exercicio6 = require('./exercicio6');

const bonus = require('./bonus');



test.skip('Numero 0 a 100 Random', () => {
  exercicio1.numRandom = jest.fn().mockReturnValue(10);

  expect(exercicio1.numRandom()).toBe(10);
  expect(exercicio1.numRandom).toHaveBeenCalled();
  expect(exercicio1.numRandom).toHaveBeenCalledTimes(1);
});

// Exercicio 2

test.skip('Divisao de dois Numeros Random', () => {
  exercicio1.numRandom = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(exercicio1.numRandom(2, 2)).toBe(1);
  expect(exercicio1.numRandom).toHaveBeenCalled();
  expect(exercicio1.numRandom).toHaveBeenCalledTimes(1);
  expect(exercicio1.numRandom).toHaveBeenCalledWith(2,2);  

});

// Exercicio 3

test.skip('Multiplicação de três Numeros Random', () => {
  exercicio1.numRandom = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);

  expect(exercicio1.numRandom(2, 2, 2)).toBe(8);
  expect(exercicio1.numRandom).toHaveBeenCalled();
  expect(exercicio1.numRandom).toHaveBeenCalledTimes(1);
  expect(exercicio1.numRandom).toHaveBeenCalledWith(2,2,2);  

  exercicio1.numRandom.mockReset();

  exercicio1.numRandom = jest.fn().mockImplementationOnce((a) => a * 2);

  expect(exercicio1.numRandom(2)).toBe(4);
  expect(exercicio1.numRandom).toHaveBeenCalled();
  expect(exercicio1.numRandom).toHaveBeenCalledTimes(1);
  expect(exercicio1.numRandom).toHaveBeenCalledWith(2); 

});

// Exercicio 4

describe.skip('Exercicio 4', () => {
  jest.mock('./exercicio4');
  it('Retornar String LowerCase', () => {
    exercicio4.stringUpperCase.mockImplementationOnce(string => string.toLowerCase());

    expect(exercicio4.stringUpperCase('CASE')).toBe('case');
    expect(exercicio4.stringUpperCase).toHaveBeenCalled();
    expect(exercicio4.stringUpperCase).toHaveBeenCalledTimes(1);
    expect(exercicio4.stringUpperCase).toHaveBeenCalledWith('CASE');

  });

  it('Retornar End Letter', () => {
    exercicio4.stringFirstLetter.mockImplementationOnce(string => string.substr(-1 ,1));

    expect(exercicio4.stringFirstLetter('xablau')).toBe('u');
    expect(exercicio4.stringFirstLetter).toHaveBeenCalled();
    expect(exercicio4.stringFirstLetter).toHaveBeenCalledTimes(1);
    expect(exercicio4.stringFirstLetter).toHaveBeenCalledWith('xablau');

  });

  it('Concatena 3 String', () => {
    exercicio4.stringConcat
      .mockImplementationOnce((string, string2, string3) => string.concat(string2, string3));

    expect(exercicio4.stringConcat('xablau', 'champola', 'xablau')).toBe('xablauchampolaxablau');
    expect(exercicio4.stringConcat).toHaveBeenCalled();
    expect(exercicio4.stringConcat).toHaveBeenCalledTimes(1);
    expect(exercicio4.stringConcat).toHaveBeenCalledWith('xablau', 'champola', 'xablau');

  });
});

// Exercicio 5

it.skip('Exercicio 5', () => {
  const mockExercicio4 = jest.spyOn(exercicio4, 'stringUpperCase')
  .mockImplementation(string => string.toLowerCase());

  expect(mockExercicio4('CASE')).toBe('case');
  expect(mockExercicio4).toHaveBeenCalled();
  expect(mockExercicio4).toHaveBeenCalledTimes(1);
  expect(mockExercicio4).toHaveBeenCalledWith('CASE');

  exercicio4.stringUpperCase.mockRestore();

  expect(exercicio4.stringUpperCase('case')).toBe('CASE');

});

//Exercicio 6

describe.skip('Exercicio 6', () => {
  exercicio6.fetchURL = jest.fn();
  afterEach(exercicio6.fetchURL.mockReset);

  it('Sucesso', async () => {
    exercicio6.fetchURL.mockResolvedValue('sucesso');

    await expect(exercicio6.fetchURL()).resolves.toBe('sucesso');
    expect(exercicio6.fetchURL).toHaveBeenCalled();
    expect(exercicio6.fetchURL).toHaveBeenCalledTimes(1);
  });

  it('Falhou', async () => {
    exercicio6.fetchURL.mockRejectedValue('Falhou');

    await expect(exercicio6.fetchURL()).rejects.toBe('Falhou');
    expect(exercicio6.fetchURL).toHaveBeenCalled();
    expect(exercicio6.fetchURL).toHaveBeenCalledTimes(1);
  });
});

// Bonus

const returnApi = {
  'id': '7h3oGtrOfxc',
  'joke': 'Whiteboards ... are remarkable.',
  'status': 200
}

describe('Exercicio Bonus', () => {
  let api = jest.spyOn(bonus, 'fetchJoke');
  afterEach(api.mockReset);

  test('Bonus Sucesso', () => {
    api = jest.fn(() => Promise.resolve({json: () => Promise.resolve(returnApi)}));
    api.mockResolvedValueOnce(returnApi.joke)
    .mockResolvedValueOnce(returnApi)

    expect(api()).resolves.toBe('Whiteboards ... are remarkable.');
    expect(api).toHaveBeenCalled();
    expect(api).toHaveBeenCalledTimes(1);

    expect(api()).resolves.toBe(returnApi);
    expect(api).toHaveBeenCalled();
    expect(api).toHaveBeenCalledTimes(2);

  });

  test('Bonus Falha', () => {
    api = jest.fn(() => Promise.reject('Falhou'));

    expect(api()).rejects.toBe('Falhou');
    expect(api).toHaveBeenCalled();
    expect(api).toHaveBeenCalledTimes(1);

  });
});




