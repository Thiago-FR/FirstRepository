const express = require('express');
const middlewares = require('../middlewares/validation');
const databse = require('../database');

const router = express;

// Listando todas as pessoas
router.get('/', (req, res) => res.status(200).json({ clients: databse }));

// Cadastrando nova pessoa
router.put('/',
  middlewares.isValidName,
  (req, res) => {
    const newClient = {
      ...req.body,
      id: databse.length + 1,
    };

    databse.push(newClient);

    res.status(201).json({ clients: databse[databse.length] });
  }
);

module.export = router;
