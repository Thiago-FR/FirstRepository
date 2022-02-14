const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const recipeRouter = require('./recipesRouter');
const drinksRouter = require('./drinksRouter');
const authMiddleware = require('./auth-middleware');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// app.use(authMiddleware); // Autenticação

app.use('/recipes', recipeRouter);
app.use('/drinks', drinksRouter);


app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});



