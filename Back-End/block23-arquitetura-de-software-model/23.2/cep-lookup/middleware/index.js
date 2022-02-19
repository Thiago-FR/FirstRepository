const validateCep = require('./validateCep');
const validadePostCep = require('./validadePostCep');
const errorMiddleware = require('./errorMiddleware');

module.exports = {
  validateCep,
  validadePostCep,
  errorMiddleware,
};
