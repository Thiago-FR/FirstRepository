const unidades = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

const makeError = (unity: string) => {
  throw new Error(`A unidade ${unity} não é uma unidade válida.`);
};

const convert = (valor: number, unidadeBase: string, unidadeConversao: string): string => {
  const indexOfUnidadeBase: number = unidades.indexOf(unidadeBase);
  const indexOfUnidadeConversao: number = unidades.indexOf(unidadeConversao);

  if (!unidades.includes(unidadeBase)) return makeError(unidadeBase);
  if (!unidades.includes(unidadeConversao)) return makeError(unidadeConversao);

  const conversao: number = Math.abs(indexOfUnidadeBase - indexOfUnidadeConversao);

  if (indexOfUnidadeBase - indexOfUnidadeConversao < 0) {
    return `${valor * Math.pow(10, conversao)}³`;
  }
  else {
      return `${valor / Math.pow(10, conversao)}³`;
  }
};

export default convert;