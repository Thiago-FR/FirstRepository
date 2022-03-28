import { NextFunction, Request, Response } from 'express';
import StatusCode from '../enums/StatusCode';
import Book from '../interfaces/Book';

const properties = ["type", "name", "price", "image", "author", "publishingCompany", "isbn"];

function validateProperties(book: Book): [boolean, string | null] {
  for (let i = 0; i < properties.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(book, properties[i])) {
      return [false, properties[i]]
    }
  }
  return [true, null];
};

function validateValues(book: Book): [boolean, string | null] {
  const entries = Object.entries(book);
  for (let i = 0; i < entries.length; i ++) {
    const [property, value] = entries[i];
    if (!value) {
      return [false, property];
    }
  };
  return [true, null];
};

function validationBook(req: Request, res: Response, next: NextFunction) {
  const book: Book = req.body;

  let [valid, property] = validateProperties(book);

  if (!valid) return res.status(StatusCode.BAD_REQUEST).json(`O campo ${property} é obrigatoório`);

  [valid, property] = validateValues(book);

  if (!valid) {
    return res.status(StatusCode.BAD_REQUEST).json(`O campo ${property} não pode ser nulo ou vazio`)
  }

  return next();
};

export default validationBook;