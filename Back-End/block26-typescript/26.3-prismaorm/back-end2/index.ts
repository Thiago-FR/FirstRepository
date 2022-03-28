import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import errorMiddleware from "./middlewares/error.middleware";

import BooksRoutes from './routes/books.routes';

const app = express();

const PORT: number = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response): Response => {
    return res.status(StatusCodes.OK).send('Express + TypeScript')
});

app.use(BooksRoutes);
app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});