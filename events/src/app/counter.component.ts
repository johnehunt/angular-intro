import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'counter',
  template: `<p>
    <ng-content></ng-content>
    Count: {{ _count }} -
    <button (click)="increment()">Increment</button>
  </p>`
})
export class CounterComponent {
  private _count: number;

  @Input() set count(n: number) {
    console.log('Setting _count to: ' + n);
    this._count = n;
  }

  @Output() countChanged = new EventEmitter<number>();

  increment() {
    this._count++;
    this.countChanged.emit(this._count);
  }
}