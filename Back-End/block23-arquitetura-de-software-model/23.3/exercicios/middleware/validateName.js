const validateName = (req, res, next) => {
  const { name, brand } = req.body;

  if (!name || name === '' || !brand || brand === '') {
    return next({
      error: {
        code: 'invalidData',
        message: 'Dados inválidos'
      }
    })
  }

  next();
};

module.exports = validateName;
