import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
      <div>
      <p>{{ data | datestamp }}</p>
      <p>{{ data | reverse: true}}</p>
      <p>{{ data | reverse: false}}</p>
    </div>`
})
export class AppComponent { 
  data = 'Some Information';
}
