"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unidades = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
const makeError = (unity) => {
    throw new Error(`A unidade ${unity} não é uma unidade válida.`);
};
const convert = (valor, unidadeBase, unidadeConversao) => {
    const indexOfUnidadeBase = unidades.indexOf(unidadeBase);
    const indexOfUnidadeConversao = unidades.indexOf(unidadeConversao);
    if (!unidades.includes(unidadeBase))
        return makeError(unidadeBase);
    if (!unidades.includes(unidadeConversao))
        return makeError(unidadeConversao);
    const conversao = Math.abs(indexOfUnidadeBase - indexOfUnidadeConversao);
    if (indexOfUnidadeBase - indexOfUnidadeConversao < 0) {
        return `${valor * Math.pow(10, conversao)}`;
    }
    else {
        return `${valor / Math.pow(10, conversao)}`;
    }
};
console.log(convert(10, 'kmgg', 'mm'));
