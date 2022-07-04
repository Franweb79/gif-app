import { state, style, trigger, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs-services/gifs/gifs.service';
import { SocialService } from '../../gifs-services/social-service/social.service';

@Component({
  selector: 'app-gifs-cards',
  templateUrl: './gifs-cards.component.html',
  styleUrls: ['./gifs-cards.component.css'],
  animations:[
      /*
       animation triggers go here.
    
    */
   trigger('hideShowButton',[

    state('hide-button',style({
      opacity:0
    })),
    state('show-button',style({
      opacity:1
    })),
    transition('hide-button => show-button',[
      animate('0.2s')
    ]),
    transition('show-button => hide-button',[
      animate('0.2s')
    ]),

   ])
  ]
})
export class GifsCardsComponent implements OnInit {

 
  
  
  constructor(public _gifsService:GifsService,
              public _social:SocialService) {

  }

  ngOnInit(): void {

    //TODO get random value for "come here"

    this._gifsService.getRandomResult('welcome');

    console.log (this._gifsService.isSomethingSearched);
  }

 
}
