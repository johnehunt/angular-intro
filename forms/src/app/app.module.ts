import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BookFormComponent } from './book-form.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [BookFormComponent],
    bootstrap: [BookFormComponent]
})
export class AppModule { }
