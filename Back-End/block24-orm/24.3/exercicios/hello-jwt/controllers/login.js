const { generateToken } = require('../middlewares');
const services = require('../services/login');

module.exports = async (req, res, next) => {
  try {
    const { username } = req.body;

    const user = await services.getFindOne(username);   

    if (user.statusCode) return next(user);

    const token = generateToken(username, user.admin);

    return res.status(200).json({ token });
  } catch (error) {
    next({
      statusCode: 500,
      message: 'Erro interno',
    });
  }
};
