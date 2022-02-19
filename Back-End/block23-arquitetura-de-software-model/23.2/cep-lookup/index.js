require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { errorMiddleware } = require('./middleware');

const routerCep = require('./routes/routerCep');

const app = express();

const PORT = process.env.PORT;

app.use(bodyParser.json());

app.use('/cep', routerCep);

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});