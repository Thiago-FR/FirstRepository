const express = require('express');
const bodyParse = require('body-parser');
require('dotenv').config();

const routerProducts = require('./controllers/productController');
const { errorMiddleware } = require('./middleware');

const PORT = process.env.PORT;

const app = express();

app.use(bodyParse.json());

app.use('/products', routerProducts);

app.get('/', (_req, res) => {
  res.status(200).json({ message: 'Online' });
});

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
