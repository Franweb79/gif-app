import { state, style, trigger, transition, animate } from '@angular/animations';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { GifsService } from '../../gifs-services/gifs/gifs.service';
import { SocialService } from '../../gifs-services/social-service/social.service';

@Component({
  selector: 'app-gifs-cards',
  templateUrl: './gifs-cards.component.html',
  styleUrls: ['./gifs-cards.component.css']
 
})
export class GifsCardsComponent implements OnInit {

 
  @ViewChild('spanElementRef') buttonCopiedSpanText!:ElementRef; 

  
  constructor(public _gifsService:GifsService,
              public _social:SocialService,
              public _renderer2:Renderer2) {

  }

  ngOnInit(): void {

    //TODO get random value for "come here"

    this._gifsService.getRandomResult('welcome');

    console.log (this._gifsService.isSomethingSearched);
  }

 
 
}
