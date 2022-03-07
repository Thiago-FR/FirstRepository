const models = require('../models/User');

const createUser = async (username, password) => {
  const MAGIC_NUMBER = 50;
  const adminAccount = Math.floor(Math.random() * 100);
  let isAdmin = false;

  if (adminAccount > MAGIC_NUMBER) isAdmin = true;

  const user = await models.createUser({ username, password, admin: isAdmin });

  return user;
};

module.exports = {
  createUser,
};
