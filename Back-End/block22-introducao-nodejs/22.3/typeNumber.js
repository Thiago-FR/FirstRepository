const typeNumber = (num) => {
  if (typeof(num) === 'string') return 'o valor deve ser um número';
  if (num === 0) return 'neutro';
  if (num > 0) return 'positivo';
  if (num < 0) return 'negativo';
};

module.exports = typeNumber;
