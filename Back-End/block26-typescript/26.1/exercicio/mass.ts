const unidades = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

const units = require('./utils');

const convert = (valor: number, unidadeBase: string, unidadeConversao: string) => {
  return units.convert(unidades, valor, unidadeBase, unidadeConversao);
};

export default convert;