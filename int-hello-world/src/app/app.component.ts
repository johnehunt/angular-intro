import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  name = '<enter name>';
  count: number = 0;

  increment() {
    this.count++;
  }

}
