import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
   template: `
     <h2>My Application</h2>
     <child>
        <div class="title">Angular Wins the Day!</div>
        <div class="author">James Davies</div>
     </child>
  `
})
export class AppComponent { }
