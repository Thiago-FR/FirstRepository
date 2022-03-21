// index.js
const express = require('express');
const { Address, Employee, Book, User } = require('./models');

const app = express();

app.get('/employees', async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: 'addresses' },
    });

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
});

// Eager Loading
// app.get('/employees/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const employees = await Employee.findOne({
//       where: { id },
//       include: [{ model: Address, as: 'addresses', attributes: {exclude: ['number']} }]
//     });

//     if (!employees) return res.status(404).json({ message: 'Funcionário não encontrado' });

//     return res.status(200).json(employees);
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Ocorreu um erro' });
//   };
// });

// Lazy Loading
app.get('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employees = await Employee.findOne({ where: { id } });

    if (!employees) return res.status(404).json({ message: 'Funcionário não encontrado' });

    if (req.query.includeAddresses === 'true') {
      const addresses = await Address.findAll({
        where: { employeeId: id }
      });

      return res.status(200).json({ employees, addresses });
    }

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
});

app.get('/address', async (_req, res) => {
  try {
    const employees = await Address.findAll({
      include: { model: Employee, as: 'employees' },
    });

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
});

app.get('/usersbooks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { userId: id },
      include: [{ model: Book, as: 'books', through: { attributes: [] }}]
    });

    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;