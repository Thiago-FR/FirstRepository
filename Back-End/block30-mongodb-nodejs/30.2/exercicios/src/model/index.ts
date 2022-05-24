export default interface Model<T> {
  read(): Promise<T[]>,
  create(obj: T): Promise<T>,
  readOne(id: string): Promise<T | null>,
  // update(obj: T, id: string): Promise<T>,
};