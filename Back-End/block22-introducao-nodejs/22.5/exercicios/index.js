const express = require('express');
const bodyParser = require('body-parser');
const errorMiddleware = require('./errorMiddleware');

const userRoute = require('./routes/user');
const btcRoute = require('./routes/btc');

const app = express();
app.use(bodyParser.json());

app.use('/user', userRoute);
app.use('/btc', btcRoute);

app.use(errorMiddleware);

app.listen('3001', () => {
  console.log('Ouvindo na 3001');
});

