const express = require('express');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).json({ message: `Desenvolvido em ${process.env.ATIVIDADE}` });
});

app.get('/:name', (req, res) => {
  const { name } = req.params;
  res.status(200).json({ message: `Está vivo!!! ${name}`});
});

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});