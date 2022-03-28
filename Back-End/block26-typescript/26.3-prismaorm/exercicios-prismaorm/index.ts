import express from 'express';
import { StatusCodes } from 'http-status-codes';
import Middleware from './Middleware';
import 'express-async-errors';
import routes from './routes';

const app = express();

app.use(express.json());

const PORT: Number = 8000;

app.get('/', (req, res) => {
    res.status(StatusCodes.OK).send('Express + TypeScript')
});

app.use('/user', routes.userRoutes);

app.use(Middleware.errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});