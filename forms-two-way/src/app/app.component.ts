import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
  name = 'Anonymous';
  age = 0;

  submitMessage(form: NgForm) {
      console.log(form.value);
      console.log(this.name);
      console.log(this.age);
  }

  incrementAge() {
    this.age++;
  }

}
