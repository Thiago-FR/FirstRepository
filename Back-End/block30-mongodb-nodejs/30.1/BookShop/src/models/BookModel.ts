import { model as createModel } from 'mongoose';
import { BookSchema, IBook } from '../schemas/BookSchema';

export default class BookModel {
  constructor(private bookModel = createModel<IBook>('books', BookSchema)) {}

  public async getBooks(): Promise<IBook[]> {
    const books = await this.bookModel.find();
    return books;
  }

  public async createBook(bookData: object): Promise<IBook> {
    const books = await this.bookModel.create(bookData);
    return books;
  }

  public async getBook(id: string): Promise<IBook | null> {
    const books = await this.bookModel.findById({ _id: id });
    return books;
  }

  public async updateBook(id: string, bookData: object): Promise<IBook | null> {
    const books = await this.bookModel.findOneAndUpdate(
      { _id: id },
      { ...bookData },
      { new: true }
    );
    return books;
  }

  public async deleteBook(id: string): Promise<IBook | null> {
    const books = await this.bookModel.findOneAndDelete({ _id: id });
    return books;
  }
}