import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing, appRoutingProviders } from './app.routes';

import { AppComponent } from './app.component';
import { ComponentOne } from './component-one';

@NgModule({
  declarations: [
    AppComponent,
    ComponentOne
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [ appRoutingProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
