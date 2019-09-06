import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    :host {
      font-family: Arial;
    }

    .tabs-selection {
      background-color: #ddd;
      display: flex;
      box-sizing: border-box;
      flex-direction: row;
      padding-left: 16px;
      padding-right: 16px;
      width: 100%;
    }
  `]
})
export class AppComponent {
  tab = 0;

  setTab(num: number) {
    this.tab = num;
  }
  
  isSelected(num: number) {
    return this.tab === num;
  }
}
