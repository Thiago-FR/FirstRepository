const JWT = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

module.exports = (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return next({
      statusCode: 401,
      message: 'Token not found',
    });
  }

  try {
    const decoded = JWT.verify(authorization, JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    next({
      statusCode: 401,
      message: error.message,
    });
  }
};
