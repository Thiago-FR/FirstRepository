const models = require('../models/User');

const getFindOne = async (username) => {
  const user = await models.getFindOne(username);
  
  if (user.statusCode) {
    return {
      statusCode: 404,
      message: 'user not found',
    };    
  }

  return user;
};

module.exports = {
  getFindOne,
};
