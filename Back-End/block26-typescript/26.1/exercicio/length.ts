const unidades = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

const units = require('./utils');

const convert = (valor: number, unidadeBase: string, unidadeConversao: string) => {
  return units.convert(unidades, valor, unidadeBase, unidadeConversao);
};

export default convert;