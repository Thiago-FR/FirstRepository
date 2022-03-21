const unidades = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

const units = require('./utils');

const convert = (valor: number, unidadeBase: string, unidadeConversao: string) => {
  return units.convert(unidades, valor, unidadeBase, unidadeConversao);
};

export default convert;

