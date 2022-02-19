const Joi = require('joi');

module.exports = (cepContent) => {
  // const { cep } = cepContent
  const { error } = Joi.object({
    cep: Joi.string().not().empty().required(),
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().required(),
  }).validate(cepContent);

  if (error) {
    return { error: {
      code: 'invalidData',
      message: error.details[0].message,
      Joi: 'Yes'
    } };
  } 
};