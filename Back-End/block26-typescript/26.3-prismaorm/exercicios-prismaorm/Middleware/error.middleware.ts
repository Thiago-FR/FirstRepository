import { NextFunction, Request, Response } from "express";



export default ((err: Error , req: Request, res: Response, next: NextFunction) => {
  const { name, message, details } = err as any;

  switch(name) {
    case 'ValidationError':
      return res.status(400).json({ message: details[0].message });
    case 'NotFoundError':
      return res.status(404).json({ message });
    case 'ConflitError':
      return res.status(409).json({ message });
    default:
      res.sendStatus(500);
  }

  return next()
});