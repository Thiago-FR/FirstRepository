const connection = require('./connection');

const getCep = async (cep) => {
  
  const [cepChecked] = await connection.execute(
    'SELECT * FROM cep_lookup.ceps ' +
    'WHERE cep = ?', [cep]
  );

  return cepChecked;
}

const postCep = async (cepContent) => connection.execute(
  'INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) ' +
  'VALUES(?, ?, ?, ?, ?)',
  [
    cepContent.cep,
    cepContent.logradouro,
    cepContent.bairro,
    cepContent.localidade,
    cepContent.uf
  ]
);

module.exports = {
  getCep,
  postCep,
};