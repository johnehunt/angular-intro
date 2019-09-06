import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StyleExampleComponent } from './style-example/style-example.component';
import { ClassAsStringComponent } from './class-as-string/class-as-string.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleExampleComponent,
    ClassAsStringComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
