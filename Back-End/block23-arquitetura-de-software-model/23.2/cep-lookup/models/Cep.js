const connection = require('./connection');
const fetch = require('node-fetch');

const fetchApi = async (cep) => {
  const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(data => data.json());

   return result;
}

const getCep = async (cepId) => {
  
  const [cepChecked] = await connection.execute(
    'SELECT * FROM cep_lookup.ceps ' +
    'WHERE cep = ?', [cepId]
  );

  if (!cepChecked.length) {
    const apiExternal = await fetchApi(cepId);

    if (!apiExternal.erro) {
      const { logradouro, bairro, localidade, uf } = apiExternal;

      await postCep({ cep: cepId, logradouro, bairro, localidade, uf });

      return [{ cep: cepId, logradouro, bairro, localidade, uf }];
    }
  }

  return cepChecked;
}

const postCep = async (cepContent) => {
  connection.execute(
    'INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) ' +
    'VALUES(?, ?, ?, ?, ?)',
    [
      cepContent.cep,
      cepContent.logradouro,
      cepContent.bairro,
      cepContent.localidade,
      cepContent.uf
    ]
  )
};

module.exports = {
  getCep,
  postCep,
};