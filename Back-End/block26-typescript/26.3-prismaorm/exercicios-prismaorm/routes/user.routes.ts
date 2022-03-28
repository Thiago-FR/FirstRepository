import express, { Request, Response } from 'express';
import UserController from '../Controller/user.controller';

const router = express.Router();

const userController = new UserController();

router.get('/', (req: Request, res: Response) => userController.findMany(req, res));
router.post('/', (req: Request, res: Response) => userController.create(req, res));

export default router;