import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable()
export class BookService {

    private books: Book[] = [
        { isbn: '123', author: 'Adam', title: 'Python' },
        { isbn: '234', author: 'Jasmine', title: 'Salsa' },
        { isbn: '345', author: 'Phoebe', title: 'Animation' },
        { isbn: '456', author: 'Gryff', title: 'Unity' }
    ];

    getBooks(): Book[] {
        return this.books;
    }
}