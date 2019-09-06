import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaysComponent } from './plays.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ PlaysComponent ],
  providers: [],
  exports: [PlaysComponent]
})
export class PlayModule {}