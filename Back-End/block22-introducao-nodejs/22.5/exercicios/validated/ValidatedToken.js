const rescue = require('express-rescue');

module.exports = rescue((req, _res, next) => {
  const { authorization } = req.headers;
    if (!authorization || authorization.toString().length !== 12) {
      const error = { status: 401, code: 'Unauthorized', message: "Token inválido"};
      return next(error);
    }
    return next();
});