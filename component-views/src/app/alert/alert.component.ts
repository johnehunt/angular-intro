import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
    hidden = true;
    
    show() {
      this.hidden = false;
    }
    
    hide() {
      this.hidden = true;
    }

}
