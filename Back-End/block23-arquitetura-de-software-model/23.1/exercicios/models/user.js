const connection = require('./connection');

const postUser = async (firstName, lastName, email, password) => connection.execute(
  'INSERT INTO model_example.user (firstName, lastName, email, password) VALUES(?,?,?,?)',
  [firstName, lastName, email, password]
);

const getUserId = async (id) => {
  const [user] = await connection.execute(
    'SELECT * FROM model_example.user WHERE id = ?',[id]
  )
  return user;
};

const getUser = async () => {
  const [user] = await connection.execute(
    'SELECT * FROM model_example.user'
  );
  return user;
};

const putUserId = async (id, firstName, lastName, email, password) => connection.execute(
  `UPDATE model_example.user
   SET firstName = ?, lastName = ?, email = ?, password = ?
   WHERE id = ${id}`,
   [firstName, lastName, email, password]
);

module.exports = {
  postUser,
  getUserId,
  getUser,
  putUserId
};
