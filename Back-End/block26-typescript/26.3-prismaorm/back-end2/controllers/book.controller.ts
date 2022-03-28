import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import Book from "../interfaces/book.interface";
import BookService from '../services/books.service';

class BookController {
  constructor(private bookService = new BookService()) {}

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const books = await this.bookService.getAll();

    return res.status(StatusCodes.OK).json(books);
  }

  public getById = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const book: Book = await this.bookService.getById(Number(id));

    if (!book) return res.status(StatusCodes.NOT_FOUND).json({ message: 'Book not found'}); 

    return res.status(StatusCodes.OK).json(book);
  }

  public create = async (req: Request, res: Response): Promise<Response> => {
    const { title, price, author, isbn }: Book = req.body;

    const bookCreated = await this.bookService.create({ title, price, author, isbn });
    return res.status(StatusCodes.CREATED).json(bookCreated);
  }

  public update = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { title, price, author, isbn }: Book = req.body;

    const result = await this.bookService.update(Number(id), { title, price, author, isbn });
    
    if (result) return next(result);
    
    return res.status(StatusCodes.NO_CONTENT).end();
  }

  public remove = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const result = await this.bookService.remove(Number(id));

    if (result) return next(result)

    return res.status(StatusCodes.NO_CONTENT).end();
  }
}

export default BookController;