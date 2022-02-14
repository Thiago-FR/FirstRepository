const rescue = require('express-rescue');

module.exports = rescue((req, _res, next) => {
  const { email, username } = req.body;
  
  const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  const charLenght = 3;
  
  if (regex.exec(email) && username.length >= charLenght) {
    return next();
  };

  const error = { status: 401, code: 'Unauthorized', message: "Email ou Usuário inválido"};  
  return next(error); 
});



