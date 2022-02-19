const Joi = require('joi');

const Book = require('../services/Book');
const Author = require('../services/Authors');

const getByAuthorId = async (req, res, next) => {
  const { id } = req.params;
  const books = await Book.getByAuthorId(id);

  if (books.error) return next(books.error);
  
  return res.status(200).json(books);
};

const getAll = async (_req, res) => {
  const books = await Book.getAll();

  return res.status(200).json(books);
};

const createAuthor = async (req, res, next) => {
  const { title, author_id } = req.body;

  const { error } = Joi.object({
    title: Joi.string().not().empty().required(),
    author_id: Joi.number().not().empty().required(),
  }).validate({ title, author_id });

  if (error) {
    return next(error);
  }

  const validatedAuthot = await Author.findById(author_id);

  if (validatedAuthot.error) {
    return next(validatedAuthot.error);
  }
  
  const books = await Book.createBook(title, author_id);
  
  return res.status(200).json(books);
};

module.exports = {
  getByAuthorId,
  getAll,
  createAuthor,
};
