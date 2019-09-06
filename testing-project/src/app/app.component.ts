import { Component } from '@angular/core';

import { BookshopComponent } from './bookshop/bookshop.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private bookshop: BookshopComponent) {}

  title = 'testing-project';
}
