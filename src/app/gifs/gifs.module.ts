import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { GifsCardsComponent } from './gifs-components/gifs-cards/gifs-cards.component';



@NgModule({
  declarations: [
    GifsCardsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    GifsCardsComponent
  ]
})
export class GifsModule { }
