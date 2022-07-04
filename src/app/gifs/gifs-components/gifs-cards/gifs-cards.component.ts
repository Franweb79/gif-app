import { state, style, trigger, transition, animate } from '@angular/animations';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { GifsService } from '../../gifs-services/gifs/gifs.service';
import { SocialService } from '../../gifs-services/social-service/social.service';

@Component({
  selector: 'app-gifs-cards',
  templateUrl: './gifs-cards.component.html',
  styleUrls: ['./gifs-cards.component.css'],
  /*animations:[
      
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
  ]*/
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

  //https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
  copyLinkToClipBoard(stringToBePassed:string){
    let textToCopy;
    //alert("cop"+stringToBePassed);

    navigator.clipboard.writeText(stringToBePassed);

    this._renderer2.setStyle(this.buttonCopiedSpanText.nativeElement,'opacity','1');

    //this.isCopied=true;

    /*setTimeout(()=>{
      this.isCopied=false;
    },2000);*/
  }

 
}
