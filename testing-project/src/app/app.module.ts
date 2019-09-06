import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookshopComponent } from './bookshop/bookshop.component';
import {BookService} from './bookshop/book.service';

@NgModule({
  declarations: [
    AppComponent,
    BookshopComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BookService, BookshopComponent], 
  bootstrap: [AppComponent]
})
export class AppModule { }
