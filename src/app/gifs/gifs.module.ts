import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { GifsCardsComponent } from './gifs-components/gifs-cards/gifs-cards.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    GifsCardsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule /* I had to put this TranslateModule also here because 
    otherwise the translate pipe on the GifsCardsComponent (this component is imported and exported in this module),
    would give error*/
  ],
  exports:[
    GifsCardsComponent,
    TranslateModule
  ]
})
export class GifsModule { }
