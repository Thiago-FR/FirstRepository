const connection = require('./connection');

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors'
  );
  return authors;
};

const findById = async (id) => {
  const [authors] = await connection.execute(
    `SELECT id, first_name, middle_name, last_name FROM model_example.authors
      WHERE id = ${id}`
  );
  return authors;
};

const create = async (firstName, middleName, lastName) => connection.execute(
  'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
  [firstName, middleName, lastName],
);

const findByName = async (firstName, middleName, lastName) => {
  let query = 'SELECT id, first_name, middle_name, last_name ' +
              'FROM model_example.authors ';

  if (middleName) {
    query += 'WHERE first_name = ? AND middle_name = ? AND last_name = ?'
  } else {
    query += 'WHERE first_name = ? AND last_name = ?'
  }

  const params = middleName ? [firstName, middleName, lastName] : [firstName, lastName]

  const [authors] = await connection.execute(query, params);

  if (authors.length === 0) return null;

  return authors;
};


module.exports = { getAll, findById, create, findByName };
