const express = require('express');
const validatedLogin = require('../validated/validatedLogin');
const ValidatedEmail = require('../validated/ValidatedEmail');
const ValidatedPassword = require('../validated/ValidatedPassword');
const generateToken = require('../generateToken');
const rescue = require('express-rescue');
const axios = require('axios');

const router = express.Router();

router.use(validatedLogin, ValidatedEmail, ValidatedPassword);

router.post('/register', (_req, res) => {
    res.status(200).send({ "message": "user created" });
});

router.post('/login', (_req, res, next) => {
   // res.token = { token: generateToken() }
  res.status(200).send({ token: generateToken()});
  next();
});

module.exports = router;


// async function fetchApi() {
//   const fetchName = await fetch('http://localhost:3001/btc/price', {
//     method: 'GET',
//     headers: {
//       Accept: 'application/json',
//       authorization: 123456789123,
//     },
//   });
//   return console.log(fetchName);
// }


// {
//   "username": "Thiago",
//   "email": "email@email.com",
//   "password": 1234567
// }