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

  //https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
  copyLinkToClipBoard(stringToBePassed:string, event:any){
    let textToCopy;
    //alert("cop"+stringToBePassed);

    navigator.clipboard.writeText(stringToBePassed);

    //show "copied link" box
    event.target.parentElement.children[1].style.opacity='1';

    //hide "copied link" box after certain time

    setTimeout(()=>{

      event.target.parentElement.children[1].style.opacity='0';

    },2000);
  }

 
}
