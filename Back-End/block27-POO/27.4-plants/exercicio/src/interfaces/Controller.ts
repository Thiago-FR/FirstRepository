import { Request, Response } from "express";

interface IController {
  findAll: (req: Request, res: Response) => Promise<Response>,
  create: (req: Request, res: Response) => Promise<Response>,
}

export default IController;