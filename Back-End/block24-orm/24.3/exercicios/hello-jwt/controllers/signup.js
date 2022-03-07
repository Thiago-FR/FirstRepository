const servicer = require('../services/User');
const { generateToken } = require('../middlewares');

module.exports = async (req, res, next) => {
  const { username, password } = req.body;  

  const user = await servicer.createUser(username, password);  

  if (!user.statusCode) {
    const token = generateToken(username, user.admin);

    return res.status(201).json(token);
  }

  return next(user);  
};