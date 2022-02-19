const { validateCep, validadePostCep } = require('../middleware');
const Cep = require('../models/Cep');

const getCep = async (cep) => {

  const isCepValid = validateCep(cep);

  if (isCepValid) return isCepValid;

  const responseCep = await Cep.getCep(cep);

  if (!responseCep.length) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado'
      }
    }
  }
  
  return responseCep;  
}

const postCep = async (cepContent) => {
  const checkValidateCep = validadePostCep(cepContent);

  if (checkValidateCep) return checkValidateCep;

  const isCepValid = validateCep(cepContent.cep);

  if (isCepValid) return isCepValid;

  const existingCep = await Cep.getCep(cepContent.cep)
  console.log(existingCep);
  if (existingCep.length) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'CEP já existente'
      }
    } 
  }

  await Cep.postCep(cepContent);

  return cepContent;  
};

module.exports = {
  getCep,
  postCep,
};