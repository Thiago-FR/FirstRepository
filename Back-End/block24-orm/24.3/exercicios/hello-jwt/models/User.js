const fs = require('fs').promises;
const path = require('path');

const users = path.join(__dirname, 'data', 'users.json');

const codeReject = {
  statusCode: 409,
  message: 'user already existss',
};

const usernameExisting = (dataJson, username) =>
  new Promise((resolve, reject) => {
    const user = dataJson.find((name) => name.username === username);
    if (user) return reject(new Error('Usuário já existe'));
    
    return resolve(true);
  });

const getFindUsername = (dataJson, username) =>
  new Promise((resolve, reject) => {
    const user = dataJson.find((name) => name.username === username);
    
    if (user) return resolve(user);
    
    return reject(new Error('Usuário não encontrado'));
  });

const getFind = async (username) => 
  fs.readFile(users)
    .then((data) => {
      const dataJson = JSON.parse(data);
      return usernameExisting(dataJson, username);
    })
    .catch((_err) => codeReject);

const getFindOne = async (username) => 
  fs.readFile(users)
    .then((data) => {
      const dataJson = JSON.parse(data);
      return getFindUsername(dataJson, username);
    })
    .catch((_err) => codeReject);

const createUser = async (newAccout) => 
  fs.readFile(users)
    .then((data) => {
      const dataJson = JSON.parse(data);
      const newJson = [...dataJson, newAccout];
      return fs.writeFile(users, JSON.stringify(newJson, null, 2));
    })
    .then(() => newAccout)
    .catch((_err) => codeReject);

module.exports = {
  getFind,
  createUser,
  getFindOne,
};