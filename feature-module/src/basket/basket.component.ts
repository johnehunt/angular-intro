import { Component, OnInit } from '@angular/core';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  template: `
    <p>Your basket is: {{ basketId }}</p>
  `
})
export class BasketComponent implements OnInit {
  basketId: string;

  constructor(private basketService: BasketService) {}

  ngOnInit() {
    this.basketId = this.basketService.getBasket();
  }
}
