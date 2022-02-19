const connection = require('./connection');

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

const findByName = async (title) => {
  const query = 'SELECT * FROM model_example.books ' +
                'WHERE title = ?';

  const [books] = await connection.execute(query, [title]);
  console.log(books);
  if (books.length === 0) return null;

  return books;
};

module.exports = { getAll, getByAuthorId, create, findByName };
