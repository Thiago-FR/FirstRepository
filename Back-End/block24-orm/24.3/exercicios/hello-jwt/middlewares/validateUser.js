const { getFind } = require('../models/User');

module.exports = async (req, _res, next) => {
  const { username } = req.body;

  const user = await getFind(username);

  if (user.statusCode) return next(user);

  next();
};