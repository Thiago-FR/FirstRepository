import { Router, Request, Response } from "express";
import BookController from "../controllers/book.controller";
import validationBook from '../middlewares/books.middleware';
import errorMiddleware from "../middlewares/error.middleware";

const router = Router();

const booksController = new BookController();

router.get('/books', booksController.getAll);
router.get('/books/:id', booksController.getById);
router.post('/books/', validationBook, booksController.create);
router.put('/books/:id', validationBook, booksController.update);
router.delete('/books/:id', validationBook, booksController.remove);

router.use(errorMiddleware);

export default router;