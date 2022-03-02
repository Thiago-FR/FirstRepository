const express = require('express');
const bodyParser = require('body-parser');
const clientsRouter = require('./routers/clients');

const PORT = 3000;
const app = express;

app.get('/', (req, res) => res.json({ message: 'Funcionando !!!' }));
app.use('/clients', clientsRouter);

app.listen(PORT, () => console.log('RUN SERVER'));
