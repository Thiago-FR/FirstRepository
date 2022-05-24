import CupModel from "../models/CupModel";
import { ICup } from "../schemas/CupSchema";

export default class CupService {
  constructor(private cupModel = new CupModel()) {}

  public async findAll(): Promise<ICup[]> {
    const cup = await this.cupModel.findAll();

    return cup;
  }
}