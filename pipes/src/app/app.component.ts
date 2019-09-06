import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <h1>Pipes Example</h1>
    <ul>
      <li>Price {{price}} - (price | currency): {{ price | currency }}</li>
      <li>Price {{price}} -(price | currency: "GBP" ): {{ price | currency: "GBP" }}</li>
      <li>Price {{price}} -(price | currency: "GBP": "symbol"): {{ price | currency: "GBP": "symbol"}}</li>
      <li>Stock {{stock}} - (stock | lowercase): {{ stock | lowercase }}</li>
      <li>SomeDate {{someDate}} - (someDate | date:'fullDate'): {{ someDate | date:'fullDate' }}</li>
      <li>SomeDate {{someDate}} -(someDate | date:'shortDate'): {{ someDate | date:'shortDate' }} </li>
      <li>SomeText '{{someText}}' - (someText | slice:3:6): {{someText | slice:3:8}}</li>
      <li>SomeText '{{someText}}' - (someText | uppercase | slice:3:6): {{someText | uppercase | slice:3:8}}</li>
    </ul>
    `
})
export class AppComponent {
  price = 100.12348;
  stock = 'IBM';
  someDate = '01:01:2019';
  someText = 'To Be Or Not to Be that is the Question';
}
