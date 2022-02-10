const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.status(200).send('Ola')
});

app.get('/:id', (req, res) => {
  const { id } = req.params;
  const OBJECT = OBJECTS.find(r => r.id === id); // Trocar OBJECT para dados relacionados

  if (!OBJECT) return res.status(404).json({ message: 'OBJECT not found' });
  res.status(200).send('Ola')
});

app.get('/search/', (req, res) => { // Query string
  const { name } = req.query; // --> Aqui pode ser colocado todas query necessárias { name, number, max, min }
  const FILTER_OBJECT = OBJECTS.filter(r => r.name === r.name.includes(name)); // Trocar FILTER_OBJECT para dados relacionados e OBJECTS

  if (!FILTER_OBJECT) return res.status(404).json({ message: 'OBJECT not found' });
  res.status(200).send(FILTER_OBJECT)
});

app.post('/', (req, res) => {
  const { id, name, price } = req.body; // --> Dados do objeto
  OBJECTS.push({ id, name, price }); // Trocar OBJECTS para dados relacionados e os dados do objeto
  res.status(201).json({ message: 'OBJECT created successfully"'})
});

app.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body; // --> Dados do objeto
  const objectIndex = OBJECTS.findIndex(r => r.id === Number(id)); // Trocar OBJECT para dados relacionados

  if (objectIndex === -1) return res.status(404).json({ message: 'OBJECT not found' });

  OBJECTS[objectIndex] = {...OBJECTS[objectIndex], name, price }; // Trocar OBJECTS para dados relacionados e os dados do objeto

  res.status(204).end();
});

app.delete('/:id', (req, res) => {
  const { id } = req.params;
  const objectIndex = OBJECTS.findIndex(r => r.id === Number(id)); // Trocar OBJECT para dados relacionados

  if (objectIndex === -1) return res.status(404).json({ message: 'OBJECT not found' });

  OBJECTS.splice(objectIndex, 1); // Trocar OBJECTS para dados relacionados e os dados do objeto

  res.status(204).end();
});

app.listen(3001, () => {
  console.log('Aplicação escutando na porta 3001');
});
