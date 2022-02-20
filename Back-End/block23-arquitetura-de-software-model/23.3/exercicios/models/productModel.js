const connection = require('./connection');

const add = async (name, brand) => {
  const [result] = await connection.execute(
    'INSERT INTO products(name, brand) ' +
    'VALUES(?,?)',[name, brand]
  );

  return { id: result.insertId, name, brand }
};

const getAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products'
  );
  
  return result
};

const getByID = async (id) => {
  const [result] = await connection.execute(
    'SELECT * FROM products ' +
    'WHERE id = ?',[id]
  );

  return result;
};

const getByName = async (name) => {
  const [result] = await connection.execute(
    'SELECT * FROM products ' +
    'WHERE name = ?',[name]
  );

  return result;
};

const update = async (id, name, brand) => {
  await connection.execute(
    'UPDATE products SET name = ?, brand = ? WHERE id = ?',[name, brand, id]
  );
}

const exclude = async (id) => {
  await connection.execute(
    'DELETE FROM products WHERE id = ?',[id]
  );
}

module.exports = {
  add,
  getAll,
  getByID,
  getByName,
  update,
  exclude
};
