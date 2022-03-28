import { PrismaClient } from "@prisma/client";
import express from 'express';

const prisma = new PrismaClient();
const app = express();

app.use(express.json())

app.get('/users',async (req, res) => {
  const users = await prisma.users.findMany();
  res.status(200).json(users)
});

app.get('/users/:id',async (req, res) => {
  const { id } = req.params;
  const users = await prisma.users.findFirst({
    where: { id: Number(id) }
  });
  res.status(200).json(users)
});

app.post('/users/',async (req, res) => {
  const { name, email, password } = req.body;
  const users = await prisma.users.create({
    data: { name, email, password }
  });
  res.status(200).json(users)
});

app.put('/users/:id',async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  const users = await prisma.users.update({
    where: { id: Number(id) },
    data: { name, email, password }
  });
  res.status(200).json(users)
});

app.delete('/users/:id',async (req, res) => {
  const { id } = req.params;
  const users = await prisma.users.delete({
    where: { id: Number(id) }
  });
  res.status(200).json(users)
});

app.listen(3000, () => {
  console.log('Ouvindo na porta 3000');
  
});
