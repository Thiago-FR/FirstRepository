import { Request, Response } from "express";
import CupService from "../services/CupService";

export default class CupController {
  constructor(private cupService = new CupService()) {}

  public async findAll(req: Request, res: Response) {
    const cup = await this.cupService.findAll();

    res.status(200).json(cup);
  }
}