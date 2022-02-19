const express = require('express');
const Book = require('../controllers/Book');
const rescue = require('express-rescue');

const router = express.Router();

router.get('/:id', rescue(Book.getByAuthorId));

router.get('/', rescue(Book.getAll));

router.post('/', rescue(Book.createAuthor));

module.exports = router;