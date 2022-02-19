const express = require('express');
const Cep = require('../controllers/Cep');
const rescue = require('express-rescue');

const router = express.Router();

router.get('/:cep', rescue(Cep.getCep));
router.post('/', rescue(Cep.postCep));

module.exports = router;
