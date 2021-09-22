const {
  uppercase,
  getUserName,
  getRepos,
  getAnimal,
  findAnimalByIdade,
} = require('./exercicios');

test.skip('Test UPPERCASE', (done) => {
  uppercase('s', (result) => {
    try {
      expect(result).toBe('S');
      done();
    } catch (error) {
      done(error);
    }
  });
});

describe.skip('Sintaxe de Promise', () => {
  test('Resolve', () => {
    return expect(getUserName(1)).resolves.toBe('Mark');
  });
  test('Reject', () => (
    expect(getUserName(3)).rejects.toEqual(new Error('User with 3 not found.'))
    /* expect.assertions(1);
    return getUserName(3).catch((error) =>
      expect(error.message).toBe('User with 3 not found.')); */
  ));
  test('Try Catch', async () => {
    expect.assertions(1);
    try {
      await (getUserName(3));
    } catch (error) {
      expect(error).toEqual(new Error('User with 3 not found.'));
    }
  });
});

describe.skip('Fetch', () => {
  it('Verificando ToDo-list', async () => (
    await expect(getRepos('https://api.github.com/orgs/tryber/repos')).resolves
      .toContain('sd-01-week4-5-project-todo-list')
  ));
  it('Verificando meme-generator', async () => (
    await expect(getRepos('https://api.github.com/orgs/tryber/repos')).resolves
      .toContain('sd-01-week4-5-project-meme-generator')
  ));
});

/* beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
}); */

describe.skip('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testando promise - findAnimalByIdade', () => {
  describe('Quando existe o animal com a idade procurado', () => {
    test('Retorne o objeto do animal', () => {
      return expect(findAnimalByIdade(1)).resolves
        .toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }])
    });
  });

  describe('Quando não existe o animal com a idade procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return expect(findAnimalByIdade(3)).rejects
        .toEqual(new Error(['Nenhum animal com essa idade!']))
    });
  });
});