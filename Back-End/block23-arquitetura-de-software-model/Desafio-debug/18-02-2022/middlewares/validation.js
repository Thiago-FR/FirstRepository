const isValidName = async (req, res, next) => {
  const { name } = req.body;

  if(!name)
    res.status(400).json({ message: 'O campo "name" é obrigatório' });

  if (name.length < 3)
    res.status(400).json({ message: 'O campo "name" deve ter mais de 3 letras' });

  next();
};

module.exports = {
  isValidName,
};
