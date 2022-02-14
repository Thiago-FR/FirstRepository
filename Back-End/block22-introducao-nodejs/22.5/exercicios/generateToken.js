const crypto = require('crypto');

function generateToken() {
  const MAX_NUMBER = 8;
  return crypto.randomBytes(MAX_NUMBER).toString('hex');
}

module.exports = generateToken;