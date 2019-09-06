export class Book { 
    isbn: string;
    author: string; 
    title: string; 

    toString(): string { 
        return `Book[${this.isbn}, ${this.author}, ${this.title}]`;
    } 
}