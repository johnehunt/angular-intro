import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { ComponentOne } from './component-one';
import { ComponentTwo } from './component-two';

@NgModule({
  declarations: [ AppComponent, ComponentOne, ComponentTwo ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
