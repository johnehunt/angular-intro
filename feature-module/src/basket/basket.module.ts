import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketService } from './basket.service';
import { BasketComponent } from './basket.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BasketComponent],
  providers: [BasketService],
  exports: [BasketComponent]
})
export class BasketModule { }