const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/recipes/search', handleHelloWordRequest);
app.get('/drinks/search', handleHelloWordRequestTwo);
app.get('/recipes/:id', handleHelloWordRequestId);

app.get('/recipes', (req,res) => {
  res.status(200).json(recipes);
});

app.get('/drinks', (req, res) => {
  res.status(200).json(drinks);
});

app.post('/recipes', (req, res) => {
  const { id, name, price } = req.body;
  console.log(req.body);
  recipes.push({ id, name, price });
  res.status(201).send({ message: 'Recipe created successfully'})
});

app.put('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex(r => r.id === Number(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

app.delete('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex(r => r.id === Number(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found'});

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
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

function handleHelloWordRequestTwo(req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const drink = drinks.filter(r => r.name.includes(name) &&
  r.price < Number(maxPrice) && r.price > Number(minPrice));
  console.log(drink);
  if (!drink) res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(drink);
};
