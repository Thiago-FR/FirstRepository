import { ZodError } from 'zod';
import Model from '../model';

export interface ServiceError {
  error: ZodError;
}

abstract class Service<T> {
  constructor(protected model: Model<T>) {}

  async read (): Promise<T[]> {
    return this.model.read();
  }

  async create (obj: T): Promise<T | null | ServiceError> {
    return this.model.create(obj);
  }

  async readOne (id: string): Promise<T | null | ServiceError> {
    return this.model.readOne(id);
  }
}

export default Service;
