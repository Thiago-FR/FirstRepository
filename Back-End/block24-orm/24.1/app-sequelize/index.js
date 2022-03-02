const express= require('express');

const userController = require('./src/controllers/userController');

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

app.use('/user', userController);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});

module.exports = app;
