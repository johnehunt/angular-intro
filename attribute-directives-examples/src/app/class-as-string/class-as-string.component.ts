import { Component, OnInit } from '@angular/core';

@Component( {
    selector: 'app-class-as-string',
    template: `
      <p ngClass="centered-text underlined">
        <ng-content></ng-content>
      </p>
    `,
    styles: [`
      .centered-text {
        text-align: center;
      }
      .underlined {
        border-bottom: 1px solid #ccc;
      }
    `]
})
export class ClassAsStringComponent {
}
