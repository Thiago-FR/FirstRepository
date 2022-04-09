type Book = {
  book: string;
  author: string;
  genre: string;
}

export default class BookWishList {
  private wishlist: Book[] = [];
  
  constructor(book: Book) {
    this.wishlist.push(book);
  }

  addToWishList(book: Book): void {
    this.wishlist.push(book);
  }

  showWishlist(): void {
    console.log(this.wishlist);
  }  
}

const wishBookList = new BookWishList(
  { book: 'Misery', author: 'Stephen King', genre: 'Thriller' },
  );
wishBookList.addToWishList({ book: 'The Road', author: 'Cormac McCarthy', genre: 'Dystopia' });
wishBookList.showWishlist();