import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import { GifsService } from 'src/app/gifs/gifs-services/gifs/gifs.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    // animation triggers go here
    trigger('openClose',[

      state('history-open', style({
        width:'100%',
       
        opacity: 1,
        /*visibility:'visible',*/
        backgroundColor: 'yellow'
      })),
      state('history-closed', style({
        
        width:'100%',
        opacity:0,
        /* visibility:'hidden', i think not needed since 
        initial display is none, so user can´t interact with the list
        like if it was a hidden but clickable thing*/
        backgroundColor: 'yellow'


        
        
      })),
      transition('history-closed => history-open',[
        animate('1s')
      ])

    ])
    
  ]
})
export class NavbarComponent implements OnInit {

  @ViewChild('searchInputElement') searchElement!:ElementRef<HTMLInputElement>;

  public searchHistoryBox:any; //TODO why doesn´t work the ! null operator when i declare as type HTMLElement

  public isOpen:boolean;

  
  constructor(public _gifsService:GifsService) { 
   
    this.isOpen=false;

  }

  ngOnInit(): void {

    this.searchHistoryBox=document.getElementById("search-history");



  }

  displaySearchHistory(){

//TODO if I try to initalize this on consctructor doesn´t work, why?
    this.searchHistoryBox.style.display = "block";

    this.isOpen=true;

    
  }

  //TODO make a test of this method, when we enter a search and push enter
  //TODO look for proper type for event, to make target.value work
  search(event:any){

    /*
      we have to specify it could be undefined to avoid this error

      https://bobbyhadz.com/blog/typescript-variable-is-used-before-being-assigned

    */

    let valueToInsert:string | undefined;
   //ElementRef<HTMLInputElement>
   if(event.target.nodeName==="INPUT"){

      valueToInsert=event.target.value;

      console.log (event.target.value);

   }else if(event.target.nodeName==="LI"){

    valueToInsert=event.target.innerText;

    console.log (event.target.innerText);
   }

  console.log(event.target.nodeName);
    

    
   // let valueToInsert=this.searchElement.nativeElement.value;

    //we will change text color depending if serach is empty or not*/

    let listElement:HTMLElement|null;

    listElement=document.getElementById("search-history");
    
    /*
      if search box is empty, we will show a text and no history.

      To do that, we replace the observable data that will be shown
    */

    if(!valueToInsert || !valueToInsert.trim()){
     
      
      let arrayWithString:string[]=["Please insert search"];

      this._gifsService.historicObserv$=of(arrayWithString);

      

      listElement!.style.color="red";



    }else{

      this._gifsService.insertValueHistoric(valueToInsert);
      this.searchElement.nativeElement.value="";

      listElement!.style.color="black";


    /*  console.log(this._gifsService._historic);

      console.log (this._gifsService.historicObserv$);*/
    }
    
    

    

  }


}
