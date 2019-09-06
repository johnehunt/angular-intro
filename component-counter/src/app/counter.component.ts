import { Component, Input } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: 'counter.component.html'
})
export class CounterComponent {
  @Input() count = 0;

  increment() {
    this.count++;
  }
}
