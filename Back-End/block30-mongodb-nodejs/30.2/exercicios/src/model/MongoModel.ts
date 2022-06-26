import { Model as M, Document } from 'mongoose';
import Model from '.'; 

export default abstract class MongoModel<T> implements Model<T> {
  constructor(protected model: M<T & Document>) {}
  
  async read (): Promise<T[]> {
    return this.model.find();
  }

  async create (obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  async readOne (id: string): Promise<T | null> {
    return this.model.findOne({ _id: id });
  }

  // async update(obj: T, id: string): Promise<T> {
  //   return this.model.updateOne({ id }, { ...obj });
  // }
};
