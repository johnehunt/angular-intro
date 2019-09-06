import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book } from './book';
import { BookService } from './book.service';

@Component( {
    selector: 'new-book',
    templateUrl: 'new-book.component.html',
})
export class NewBookComponent {
    private isbn = 10;
    constructor( private bookService: BookService ) { }
    
    addBook() {
        let book = new Book(this.isbn + '', 'author', 'title');
        this.isbn += 1;
        this.bookService.addBook(book);
    }
}