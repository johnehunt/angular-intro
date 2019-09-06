import { Component, ViewChild } from '@angular/core';
import { AlertComponent } from './alert/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    @ViewChild(AlertComponent, {static: false}) alert: AlertComponent;

    showAlert() {
      this.alert.show();
    }
}
