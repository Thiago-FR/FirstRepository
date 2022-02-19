const Book = require('../models/book');

const isValid = (title, authorId) => {
  if (!title || title === '' || typeof(title) !== 'string' || title.length < 3
  || !authorId) return false;
  return true;
};

const getAll = async () => {
  const books = await Book.getAll();

  return books;
};

const getByAuthorId = async (id) => {
  const books = await Book.getByAuthorId(id);

  if (books.length === 0) {
    return {
      error: {
        code: 'notFound',
        message: `Não foi possível encontrar uma pessoa autora com o id ${id}`,
      },
    };
  }

  return books;
};

const createBook = async (title, authorId) => {
  //const validBook = isValid(title, authorId);
  const existingBook = await Book.findByName(title);

  if (existingBook) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'O livro já existe com esse titulo',
      },
    };
  };

  const [books] = await Book.create(title, authorId);

  const bookId = books.insertId;

  return {
    bookId,
    title,
    authorId,
  };
};

module.exports = {
  getAll,
  getByAuthorId,
  createBook,
};
