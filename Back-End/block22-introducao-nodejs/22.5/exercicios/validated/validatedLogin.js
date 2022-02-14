const rescue = require('express-rescue');

module.exports = rescue((req, _res, next) => {
  const { username, password, email } = req.body;
    if ((!username || !password || !email) 
    || (username === '' || password === '' || email === '')) {
      const error = { status: 401, code: 'Unauthorized', message: "Dados inválidos"};
      return next(error);
    }
    return next();
});



