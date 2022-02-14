const rescue = require('express-rescue');

module.exports = rescue((req, _res, next) => {
  const { password } = req.body;
  const MIN_LENGTH = 4;
  const MAX_LENGTH = 8;
  
  if (password.toString().length >= MIN_LENGTH && password.toString().length<= MAX_LENGTH && typeof(password) === 'number') {
    return next();
  }; 

  const error = { status: 401, code: 'Unauthorized', message: "Senha inválida"};  
  return next(error); 
});



