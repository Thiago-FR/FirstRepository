const Joi = require('joi');

const validateJoi = (username, password) => {
  const { error } = Joi.object({
    username: Joi.string().min(5).required().messages({
      'any.required': '"username" is required',
      'string.min': '"username" length must be at least 5 characters long',
    }),
    password: Joi.string()
      .min(5)
      .required()
      .messages({
      'any.required': '"password" is required',
      'string.min': '"password" length must be at least 5 characters long',
    }),
  }).validate({ username, password });

  return error;
};

module.exports = (req, _res, next) => {
  const { username, password } = req.body;
  const error = validateJoi(username, password);
  if (error) {
    return next(error);
  }
  next();
};