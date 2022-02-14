const express = require('express');
const router = express.Router();

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

router.get('/search', handleHelloWordRequestTwo);

router.get('/:id', handleHelloWordRequestId);

router.get('/', (req, res) => {
  res.status(200).json(drinks);
});

function handleHelloWordRequestId(req, res) {
  const { id } = req.params;
  const recipe = drinks.find(r => r.id === Number(id));
  if (!recipe) res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
};

function handleHelloWordRequestTwo(req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const drink = drinks.filter(r => r.name.includes(name) &&
  r.price < Number(maxPrice) && r.price > Number(minPrice));
  console.log(drink);
  if (!drink) res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(drink);
};

module.exports = router;