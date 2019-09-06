import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component( {
    selector: 'app-root',
    templateUrl: 'book-form.component.html',
})
export class BookFormComponent {
    registerUser( form: NgForm ) {
        console.log( form.value )
        console.log( `ISBN: ${form.value.isbn}` );
        console.log( `Author.firstName: ${form.value.author.firstName}` )
        console.log( `Author.lastName: ${form.value.author.lastName}` )
        console.log( `Book.title: ${form.value.book.title}` )
        console.log( `Book.subtitle: ${form.value.book.subtitle}` )
    }
}

