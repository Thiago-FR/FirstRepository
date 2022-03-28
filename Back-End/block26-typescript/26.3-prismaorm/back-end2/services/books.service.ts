import connection from '../models/connection';
import BookModel from '../models/book.model';
import Book from '../interfaces/book.interface';

class BookService {
  public model: BookModel;

  constructor() {
    this.model = new BookModel(connection);
  }

  public async getAll(): Promise<Book[]> {    
    const books = await this.model.getAll();

    return books;
  }

  public async getById(id: number): Promise<Book> {    
    const book: Book = await this.model.getById(id);

    return book;
  }

  public create(book: Book): Promise<Book> {
    return this.model.create(book);
  }

  public async update(id: number, book: Book): Promise<any> {
    try {
      const check = await this.model.getById(id);
      if (!check) {
        throw new Error('Book doesn`t exists!');
      }
      return await this.model.update(id, book);
    } catch (error) {
      return error;
    }
  }

  public async remove(id: number): Promise<any> {
    try {
      const check = await this.model.getById(id);
      if (!check) {
        throw new Error('Book doesn`t exists!');
      }
      return this.model.remove(id);
    } catch (error) {
      return error;
    }    
  }
}

export default BookService;
