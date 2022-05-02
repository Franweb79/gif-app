import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifsCardsComponent } from './gifs-components/gifs-cards/gifs-cards.component';



@NgModule({
  declarations: [
    GifsCardsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GifsCardsComponent
  ]
})
export class GifsModule { }
