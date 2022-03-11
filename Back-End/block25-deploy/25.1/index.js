const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).json('Ok');
});

app.get('/:name', (req, res) => {
  const { name } = req.params;
  res.status(200).json({ message: `Hi my name is ${name}`});
});

app.listen(PORT, () => {
  console.log(`Ouvindo na porta 3000 ${PORT}`);
});