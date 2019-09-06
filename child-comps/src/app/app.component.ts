import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h2>Parent</h2>
      <hr />
      <info-comp></info-comp>
      <hr />
      `
})
export class AppComponent { }
