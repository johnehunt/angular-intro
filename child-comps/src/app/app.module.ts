import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfoComponent } from './info.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent
  ],
  imports: [ BrowserModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
