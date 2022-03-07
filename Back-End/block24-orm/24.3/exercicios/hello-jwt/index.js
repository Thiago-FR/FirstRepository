require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/users/me', middlewares.auth, controllers.userMe);
app.get('/ping', controllers.ping);
app.get('/top-secret', middlewares.auth, middlewares.isAdminAuth, controllers.topSecret);

app.post('/login', middlewares.joiValidate, controllers.login);
app.post('/signup', middlewares.joiValidate, middlewares.validateUser, controllers.signup);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
