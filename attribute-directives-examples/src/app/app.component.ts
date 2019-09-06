import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <p><app-style-example>Style me!</app-style-example></p>
    <p>
    <app-class-as-string>Hello World!</app-class-as-string>
    </p>
    `
  })
export class AppComponent { }
