import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BookService } from './book.service';
import { AppComponent } from './app.component';
import { NewBookComponent } from './new-book.component';

@NgModule({
  declarations: [AppComponent, NewBookComponent ],
  imports: [BrowserModule],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
