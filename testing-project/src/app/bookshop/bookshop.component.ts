import { Component, OnInit } from '@angular/core';

import {BookService} from './book.service';
import { Book } from './book';

@Component({
  selector: 'app-bookshop',
  templateUrl: './bookshop.component.html'
})
export class BookshopComponent {

  constructor(private bookservice: BookService) { }

  getBooks(): Book[] {
    return this.bookservice.getBooks();
  }

}
