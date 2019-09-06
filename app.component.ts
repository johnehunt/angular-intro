import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<p changecolor>{{message}}</p>`
})
export class AppComponent {
  message = 'Hello!';
}
