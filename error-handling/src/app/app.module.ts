import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { MyGlobalErrorHandler } from './myglobalerrorhandler';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [{ provide: ErrorHandler, useClass: MyGlobalErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }
