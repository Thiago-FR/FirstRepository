const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const jwtConfig = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

module.exports = (username, admin) => {
  const payload = {
    username,
    admin,
  };

  const token = jwt.sign(payload, JWT_SECRET, jwtConfig);

  return token;
};
