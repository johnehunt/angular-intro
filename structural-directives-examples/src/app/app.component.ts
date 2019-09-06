import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    show = true;
    
    toggleShow() {
      this.show = !this.show;
    }
    
    plays = [
       { title: 'The Tempest'},
       { title: 'Richard III'},
       { title: 'Othello'},
       { title: 'Hamlet'}
    ];
}
