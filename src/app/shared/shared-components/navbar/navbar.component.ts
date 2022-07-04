import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { GifsService } from 'src/app/gifs/gifs-services/gifs/gifs.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    /*
       animation triggers go here.
    
    */
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
        animate('0.5s')
      ]),
      transition('history-open => history-closed',[
        animate('0.5s')

      ])

    ])
    
  ]
})
export class NavbarComponent implements OnInit {

  @ViewChild('searchInputElement') searchElement!:ElementRef<HTMLInputElement>;

  public searchHistoryBox:any; //TODO why doesn´t work the ! null operator when i declare as type HTMLElement

  public isOpen:boolean;

  public isClickable:boolean;

  
  constructor(public _gifsService:GifsService, private _router:Router) { 
   
    this.isOpen=false;

    this.isClickable=true;


  }

  ngOnInit(): void {

    this.searchHistoryBox=document.getElementById("search-history");



  }

  /*
    this method will toggle search history. When searchHistoryBox is opened,
    another click on the seach box will hide the search box
  */
  toogleSearchHistory(){

//TODO if I try to initalize this on consctructor doesn´t work, why?
    this.searchHistoryBox.style.display = "block";

    if(this.isOpen===true){
      this.isOpen=false;
    }else{
      this.isOpen=true;

    }

    
  }

  //TODO make a test of this method, when we enter a search and push enter
  //TODO look for proper type for event, to make target.value work
  search(event:any){

    //we could perform a search on another route, so back to main to show results
    this._router.navigate(['/main']);

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

   }

    

    //we will change text color depending if search is empty or not*/

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

      this.isClickable=false;

      /*
        we set isOpen to true to make animation works (and thus, show the "enter valid search" text)
        once we click search box with empty string
      */
      this.isOpen=true;



    }else{

      //check if value already exists on search history

      let isValueOnHistory=false;

      //we get the observable with history. It contains an array with all results

      this._gifsService.historicObserv$.forEach(arrayWithAllResults=>{

        /*
          for each value inside the array, we check if current value to insert is already in historic.
          If it is not, we add to historic. In case it is, we include not

        */
        arrayWithAllResults.forEach(currentValue=>{
          if(currentValue===valueToInsert){

            isValueOnHistory=true;
          }
        });
        

     

      });


      //as said, If value is not in historic, we add to historic. In case it is, we include not
      if(isValueOnHistory===false){

        this._gifsService.insertValueHistoric(valueToInsert);
        this.searchElement.nativeElement.value="";
  
        listElement!.style.color="black";
        
        this.isClickable=true;
  
        

      }

      this._gifsService.getGiphyAPIData(valueToInsert);
      

      //we close the history element once search is done, isOpen controls the animation
      this.isOpen=false;
     



    }
    

  }


}
