import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component( {
    selector: 'app-root',
    templateUrl: 'book-form.component.html',
})
export class BookFormComponent {
    saveBook( form: NgForm ) {
        console.log(`ISBN: ${form.value.isbn}`);
        console.log(`Author: ${form.value.author}`);
        console.log(`Title: ${form.value.title}`)
    }
}