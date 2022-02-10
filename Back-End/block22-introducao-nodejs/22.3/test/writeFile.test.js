const { expect } = require('chai');
const fs = require('fs');
const sinon = require('sinon');
const writeFile = require('../writeFile');

describe.only('Função escreverá um conteúdo em um arquivo específico', () => {
  const FILE_DEFAULT = 'Arquivo salvo com sucesso';
  const RETURN_DEFAULT = 'ok';

  before(() => {
    sinon.stub(fs, 'writeFileSync').returns(RETURN_DEFAULT);
  });
  after(() => {
    fs.writeFileSync.restore();
  });  

  it('Funcão escreve em um arquivo e retorna ok', () => {
      const result = writeFile('file.txt', FILE_DEFAULT);

      expect(result).to.be.a('string');
      expect(result).to.be.equals(RETURN_DEFAULT);
  });
});