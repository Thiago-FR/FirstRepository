const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const routerAuthor = require('./routes/author');
const routerBook = require('./routes/book');
const error = require('./middleware/error');

const app = express();

app.use(bodyParser.json());
const PORT = process.env.PORT;

app.use('/authors', routerAuthor);
app.use('/books', routerBook);

app.use(error);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});