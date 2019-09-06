import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ForExampleComponent } from './components/for-example.component';

@NgModule( {
    declarations: [
        AppComponent,
        ForExampleComponent
    ],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule { }
