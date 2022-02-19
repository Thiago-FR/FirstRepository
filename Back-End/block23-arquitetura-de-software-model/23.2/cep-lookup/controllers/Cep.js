const Cep = require('../services/Cep');

const getCep = async (req, res, next) => {
  const { cep } = req.params;

  const returnCep = await Cep.getCep(cep);

  if (!returnCep.error) return res.status(200).json(returnCep);
  
  return next(returnCep.error);  
};

const postCep = async (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const returnPost = await Cep.postCep({ cep, logradouro, bairro, localidade, uf });
  
  if (!returnPost.error) return res.status(200).json(returnPost);
  
  return next(returnPost.error);
};

module.exports = {
  getCep,
  postCep,
};
