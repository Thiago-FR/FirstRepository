const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const MovieController = require('./controllers/movieController');

const app = express();

app.use(bodyParser.json());

app.post('/movies', MovieController.create);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});