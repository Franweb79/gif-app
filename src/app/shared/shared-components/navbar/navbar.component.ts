import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('searchInputElement') searchElement!:ElementRef<HTMLInputElement>;
  constructor() { }

  ngOnInit(): void {
  }

  search(){
    console.log ("busqueda");

    console.log (this.searchElement.nativeElement.value);

    this.searchElement.nativeElement.value="";
  }


}
