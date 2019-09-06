import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BookFormComponent } from './book-form.component';

@NgModule({
    declarations: [BookFormComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [BookFormComponent]
})
export class AppModule {}
