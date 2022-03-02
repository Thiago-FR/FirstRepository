const express = require('express');
const routerBook = require('./src/controllers/bookController');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.use('/books', routerBook);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});