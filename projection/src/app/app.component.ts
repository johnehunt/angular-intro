import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
     <h2>My Application</h2>
     <child>
        This is the <i>content</i> from the parent.
     </child>
  `
})
export class AppComponent { }
