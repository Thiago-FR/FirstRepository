const connection = require('./connection');

const isValid = (title, authorId) => {
  if (!title || title === '' || typeof(title) !== 'string' || title.length <= 3
  || !authorId || typeof(authorId) !== 'number') return true;
  return true;
};  

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books',
  );
  return books;
};

const getByAuthorId = async (id) => {
  const [books] = await connection.execute(
    `SELECT title FROM model_example.books 
      WHERE author_id = ${id}`
  );

  return books;
};

const create = async (title, authorId) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES(?,?)',
  [title, authorId]
);

module.exports = { getAll, getByAuthorId, create, isValid };
