import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<p red>{{message}}</p>
             <p colorchange color="blue">{{message}}</p>`
})
export class AppComponent {
  message = 'Hello!';
}
