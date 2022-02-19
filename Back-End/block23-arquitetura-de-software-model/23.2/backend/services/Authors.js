const Author = require('../models/author.js');

const getNewAuthor = ({
  id,
  firstName,
  middleName,
  lastName
}) => {
  const fullName = [firstName, middleName, lastName]
    .filter(Boolean)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName
  };
};

const seriallize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name
});

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

const getAll = async () => {
  const authors = await Author.getAll()
  
  return authors.map(seriallize).map(getNewAuthor);
}

const findById = async (id) => {
  const authors = await Author.findById(id)

  if (authors.length === 0) {
    return {
      error: {
        code: 'notFound',
        message: `Não foi possível encontrar uma pessoa autora com o id ${id}`,
      }
    }
  }

  return authors.map(seriallize);
}

const createAuthor = async (firstName, middleName, lastName) => {
  // const validAuthor = isValid(firstName, middleName, lastName);
  const existingAuthor = await Author.findByName(firstName, middleName, lastName);

  if (existingAuthor) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Uma pessoa autora já existe com esse nome completo'
      }
    }
  }

  const [author] = await Author.create(firstName, middleName, lastName);

  const authorId = author.insertId;

  return getNewAuthor({
    id: authorId,
    firstName,
    middleName,
    lastName
  });
};
    

module.exports = {
  getAll,
  findById,
  createAuthor,
}