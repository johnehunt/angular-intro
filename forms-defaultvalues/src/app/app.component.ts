import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  message = 'Hello World';
  
  submitMessage( form: NgForm ) {
      this.message = form.value.message;
      console.log(this.message);
  }
}
