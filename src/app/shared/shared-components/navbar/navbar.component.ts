import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/gifs/gifs-services/gifs/gifs.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('searchInputElement') searchElement!:ElementRef<HTMLInputElement>;
  
  constructor(public _gifsService:GifsService) { }

  ngOnInit(): void {
  }

  search(){

    let valueToInsert=this.searchElement.nativeElement.value;
    /*console.log ("busqueda");

    console.log (this.searchElement.nativeElement.value);*/
    
    this._gifsService.insertValueHistoric(valueToInsert);
    this.searchElement.nativeElement.value="";

    //one getter is called with no ()
    console.log(this._gifsService.historic);
  }


}
