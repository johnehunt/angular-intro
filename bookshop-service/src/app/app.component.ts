import { Component } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [BookService]
})
export class AppComponent {
  bookshop_name = 'bookshop';
  books: Book[];

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

}
