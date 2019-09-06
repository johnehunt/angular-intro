import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TabComponent } from './tab/tab.component';
import { TabContentComponent } from './tab/tab-content.component';
import { Tab3Component } from './tab/tab3.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    TabContentComponent,
    Tab3Component
  ],
  imports: [ BrowserModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
