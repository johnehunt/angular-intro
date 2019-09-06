import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RedTextDirective } from './red-text.directive';
import { ColorChangeDirective } from './colorchange.directive';

@NgModule({
  declarations: [AppComponent, RedTextDirective, ColorChangeDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
