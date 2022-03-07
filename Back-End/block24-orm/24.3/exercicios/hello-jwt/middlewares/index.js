const error = require('./error');
const joiValidate = require('./joiValidate');
const auth = require('./auth');
const isAdminAuth = require('./isAdmin.auth');
const validateUser = require('./validateUser');
const generateToken = require('./generateToken');

module.exports = {
  error,
  joiValidate,
  auth,
  isAdminAuth,
  validateUser,
  generateToken,
};
