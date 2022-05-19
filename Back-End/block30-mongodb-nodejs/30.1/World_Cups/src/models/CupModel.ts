import { model as createModel } from 'mongoose';
import { CupSchema, ICup } from '../schemas/CupSchema';

export default class CupModel {
  constructor(private cupModel = createModel<ICup>('tournaments', CupSchema)) {}

  public async findAll(): Promise<ICup[]> {
    const cup = await this.cupModel.find();
    
    return cup;
  }
}