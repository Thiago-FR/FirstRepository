import { Response, Request, NextFunction} from 'express';

export default (err: any, req: Request, res: Response, next: NextFunction) => {
  return res.status(500).json({ message: err.message})
};
