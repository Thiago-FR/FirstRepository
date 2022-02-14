function validateName(req, res, next) {
  const { name } = req.body;

  if (!name || name === '') return res.status(400).json({ message: 'Invalid data!' });

  next();
};

function validateId(req, res, next) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex(r => r.id === Number(id));
  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found'});
  req.idNumber = recipeIndex;
  next();
};

module.exports = {
  validateName,
  validateId
}