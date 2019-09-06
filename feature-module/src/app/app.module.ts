import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BasketModule } from '../basket/basket.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    BasketModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
