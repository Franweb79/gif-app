import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs-services/gifs/gifs.service';

@Component({
  selector: 'app-gifs-cards',
  templateUrl: './gifs-cards.component.html',
  styleUrls: ['./gifs-cards.component.css']
})
export class GifsCardsComponent implements OnInit {

  constructor(public _gifsService:GifsService) { }

  ngOnInit(): void {
  }

}
