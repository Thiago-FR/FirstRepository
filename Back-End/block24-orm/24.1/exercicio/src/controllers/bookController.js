const express = require('express');
const { Book } = require('../models');

const router = express.Router();

router.get('/', async (_req, res) => {
  const books = await Book.findAll();

  if (!books) return res.status(404).json({ message: 'Not Found'});

  res.status(200).json(books);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const books = await Book.findByPk(id);

  if (!books) return res.status(404).json({ message: 'Not Found'});

  res.status(200).json(books);
});

router.post('/', async (req, res) => {
  const { title, author, pageQuantity } = req.body;

  try {
    const books = await Book.create({ title, author, pageQuantity });

    res.status(201).json(books);
  } catch (error) {

    return res.status(404).json({ message: error.message });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;

  try {
    const [books] = await Book.update(
      { title, author, pageQuantity },
      { where: { id }});

    if(!books) return res.status(404).json({ message: 'Usuário não encontrado' });
    
    res.status(201).json(books);
  } catch (error) {
    console.log(error.message);
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const books = await Book.destroy({ where: { id }});

  if (!books) return res.status(404).json({ message: 'Not Found'});

  res.status(200).json({ message: 'Usuário excluído com sucesso!' });
});

module.exports = router;
