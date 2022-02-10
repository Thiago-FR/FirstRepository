const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs').promises;
const generateToken = require('./generateToken');

const app = express();

app.use(cors());
app.use(bodyParser.json())

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.get('/simpsons', (req, res) => {
  fs.readFile('./simpsons.json', 'utf8')
    .then(data => res.status(200).json(JSON.parse(data)))
    .catch(err => console.log(err));  
});

app.get('/simpsons/:id', (req, res) => {
  const { id } = req.params;
  fs.readFile('./simpsons.json', 'utf8')
    .then(data => {
      const character = JSON.parse(data).find(r => r.id === id);

      if (!character) return res.status(404).json({ message: 'simpson not found' });

      return res.status(200).send(character)
    })
    .catch(err => console.log(err)); 
});

// app.get('/search/', (req, res) => { // Query string
//   const { name } = req.query; // --> Aqui pode ser colocado todas query necessárias { name, number, max, min }
//   const FILTER_OBJECT = OBJECTS.filter(r => r.name === r.name.includes(name)); // Trocar FILTER_OBJECT para dados relacionados e OBJECTS

//   if (!FILTER_OBJECT) return res.status(404).json({ message: 'OBJECT not found' });
//   res.status(200).send(FILTER_OBJECT)
// });

app.post('/hello', (req, res) => {
  const { name } = req.body; // --> Dados do objeto
  // OBJECTS.push({ id, name, price }); // Trocar OBJECTS para dados relacionados e os dados do objeto
  res.status(201).json({ message: `Hello, ${name}` })
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body; // --> Dados do objeto
  
  if (age <= 17) return res.status(404).json({ message: 'Unauthorized' })

  res.status(200).json({ message: `Hello, ${name}` })
});

app.post('/simpsons', (req, res) => {
  const { id, name } = req.body; // --> Dados do objeto
  fs.readFile('./simpsons.json', 'utf8')
    .then(data => {
      let character = JSON.parse(data).find(r => Number(r.id) === id);

      if (character) return res.status(409).json({ message: 'id already exists' });
      character = [...JSON.parse(data), { id: id.toString(), name }];
      return fs.writeFile('./simpsons.json', JSON.stringify(character))
    })
    .then(() => res.status(204).end())
    .catch(err => console.log(err)); 
});

app.post('/authorization', (req, res) => {
  const token = req.headers.authorization;
  
  if (token.length !== 16) return res.status(404).json({ message: 'Invalid Token!' })

  res.status(200).json({ message: `Valid Token!` })
});

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;
  
  if (!email || !password || !firstName || !phone) return res.status(401).json({ message: 'missing fields' })

  res.status(200).json({ token: `${generateToken()}` })
});


app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  console.log(name, age);
  res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` })
});

// app.delete('/:id', (req, res) => {
//   const { id } = req.params;
//   const objectIndex = OBJECTS.findIndex(r => r.id === Number(id)); // Trocar OBJECT para dados relacionados

//   if (objectIndex === -1) return res.status(404).json({ message: 'OBJECT not found' });

//   OBJECTS.splice(objectIndex, 1); // Trocar OBJECTS para dados relacionados e os dados do objeto

//   res.status(204).end();
// });

app.listen(3001, () => {
  console.log('Aplicação escutando na porta 3001');
});
