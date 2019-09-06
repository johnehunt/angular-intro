export class Book { 
    isbn: string;
    author: string; 
    title: string; 

    constructor(isbn: string, author: string, title: string) {
        this.isbn = isbn;
        this.author = author;
        this.title = title;
    }

    toString(): string { 
        return `Book[${this.isbn}, ${this.author}, ${this.title}]`;
    } 
}