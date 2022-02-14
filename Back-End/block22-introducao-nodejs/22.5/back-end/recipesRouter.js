const express = require('express');
const router = express.Router();

const validated = require('./validated');

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

router.get('/search', handleHelloWordRequest);

router.get('/:id', handleHelloWordRequestId);

router.get('/', (req,res) => {
  res.status(200).json(recipes);
});

router.post('/', validated.validateName, (req, res) => {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price });
  res.status(201).send({ message: 'Recipe created successfully'})
});

router.put('/:id', validated.validateId, (req, res) => {
  const { name, price } = req.body;

  recipes[req.idNumber] = { ...recipes[req.idNumber], name, price };

  res.status(204).end();
});

router.delete('/:id', validated.validateId, (req, res) => {
  recipes.splice(req.idNumber, 1);

  res.status(204).end();
});

function handleHelloWordRequestId(req, res) {
  const { id } = req.params;
  const recipe = recipes.find(r => r.id === Number(id));
  if (!recipe) res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
};

function handleHelloWordRequest(req, res) {
  const { name } = req.query;
  const recipe = recipes.filter(r => r.name.includes(name));
  if (!recipe) res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
};

module.exports = router;
