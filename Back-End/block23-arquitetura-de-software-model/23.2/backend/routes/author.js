const express = require('express');
const Author = require('../controllers/Author');
const rescue = require('express-rescue');

const router = express.Router();

router.get('/:id', rescue(Author.findById));

router.get('/', rescue(Author.getAll));

router.post('/', rescue(Author.createAuthor));

module.exports = router;
