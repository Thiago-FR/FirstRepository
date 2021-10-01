const searchEmployee = require('./script');

test('Test 1', () => {
  expect(searchEmployee('4678-2', 'lastName')).toEqual({ id: '4678-2', lastName: 'Dodds' });
});

test('Test 2', () => {
  expect(searchEmployee('4678-5', 'lastName')).toBe("ID não identificada");
});

test('Test 3', () => {
  expect(searchEmployee('4678-2', 'done')).toBe("Informação indisponível");
});