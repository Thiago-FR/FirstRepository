const express = require('express');
const { User } = require('../models');

const router = express.Router();

router.get('/', async (_req, res) => {
  const users = await User.findAll();

  return res.status(200).json(users);
});

router.get('/search/:id', async (req, res) => {
  const { id } = req.params;
  const { email } = req.query;

  const user = await User.findOne({ where: { id, email }});

  if (!user) return res.status(404).json({ message: 'Usíario não econtrado'});

  return res.status(200).json(user);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const user = await User.findByPk(id);

  if (!user) return res.status(404).json({ message: 'Usíario não econtrado'});

  return res.status(200).json(user);
});

router.post('/', async (req, res) => {
  const { fullName, email, phoneNum } = req.body;

  const newUser = await User.create({ fullName, email, phoneNum });
console.log(newUser);
  if (!newUser) return res.status(404).json({ message: 'Usíario não foi cadastrado'});

  return res.status(201).json(newUser);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { fullName, email } = req.body;

  const [updateUser] = await User.update(
    { fullName, email },
    { where: { id, }});

  if (!updateUser) return res.status(404).json({ message: 'Usíario não encontrado'});

  return res.status(200).json({ message: 'Usuário atualizado com sucesso!' });
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const deleteUser = await User.destroy({ where: { id }});

  if (!deleteUser) return res.status(404).json({ message: 'Usíario não econtrado'});

  return res.status(200).json({ message: 'Usuário excluído com sucesso!' });
});


module.exports = router;
