import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DateStamp} from './datestamp.pipe';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  declarations: [AppComponent, DateStamp, ReversePipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
