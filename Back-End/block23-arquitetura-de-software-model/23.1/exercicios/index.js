const express = require('express');
const bodyParser = require('body-parser');
const routerUser = require('./routes/userRouter');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

app.use('/user', routerUser);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});