const express = require('express');
const userModel = require('../models/user');

const router = express.Router();

const isValid = (req, res, next) => {
  const MIN_CHARACTER = 6;
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || firstName === '' || !lastName || lastName === ''
  || !email || email === '' || !password || password === ''
  || password.length < MIN_CHARACTER) {
    return res.status(400).json({ "error": true, "message": "O campo 'password' deve ter pelo menos 6 caracteres"});
  };
  next();
};

router.post('/', isValid, async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  await userModel.postUser(firstName, lastName, email, password);

  res.status(201).json({ firstName, lastName, email, password });
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await userModel.getUserId(id);

  if(user.length === 0) return res.status(404).json({ "error": true, "message": "Usuário não encontrado" });

  res.status(200).json(user);
});

router.get('/', async (_req, res) => {
  const user = await userModel.getUser();
  
  res.status(200).json(user);
});

router.put('/:id', isValid, async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;

  await userModel.putUserId(id, firstName, lastName, email, password);

  const user = await userModel.getUserId(id);
  
  if (user.length === 0) return res.status(404.).json({ "error": true, "message": "Usuário não encontrado" });

  res.status(200).json(user);
});

module.exports = router;
