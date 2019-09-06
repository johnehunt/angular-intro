import { Component } from '@angular/core';

@Component({
  selector: 'child',
  template: `
      <div style="border: 1px solid blue; padding: 1rem;">
        <h2>Child Component</h2>
        <h4>
          <ng-content select=".title"></ng-content>
        </h4>
        <p> by <ng-content select=".author"></ng-content></p>
      </div>`
})
export class ChildComponent { }
