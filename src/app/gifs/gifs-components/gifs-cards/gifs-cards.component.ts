import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs-services/gifs/gifs.service';
import { SocialService } from '../../gifs-services/social-service/social.service';

@Component({
  selector: 'app-gifs-cards',
  templateUrl: './gifs-cards.component.html',
  styleUrls: ['./gifs-cards.component.css']
})
export class GifsCardsComponent implements OnInit {

  constructor(public _gifsService:GifsService,
              public _social:SocialService) {

  }

  ngOnInit(): void {

    console.log (this._gifsService.isSomethingSearched);
  }

  fail(){
    alert("hi");
  }

}
