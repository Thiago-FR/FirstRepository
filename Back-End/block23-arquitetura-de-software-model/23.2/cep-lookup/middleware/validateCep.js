module.exports = (cep) => {
  const regex = /\d{5}-?\d{3}/;

  if (!regex.exec(cep)) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      }
    }
  }
};
