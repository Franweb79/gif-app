import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { GifsService } from './gifs/gifs-services/gifs/gifs.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'gif-app';

  constructor(public _gifsService:GifsService, public _translate: TranslateService){

   

   _translate.setDefaultLang('en');

   let browserLang = _translate.getBrowserLang();

  
//we had to use the null assetion operator ! because getBrowserLang can be string or undefined
   _translate.use(browserLang!);

    
  }

  ngOnInit(): void {

    this.initializeData();

  }

  /*
    will be used to manage data on localStorage inside onInit

    See README´s "Notes  for Developers" number 1

  */
  initializeData(){

    
      if(localStorage.length>0){

        //TODO make with the localStorageToParse work with non null assertion operator ! and delete the any;
  
        
  
        /*
          we imagine we have data stored on localStorage as "9,8,7,6,5" 
          (remember ww allow maximum 5 search items)
  
        */
  
        let localStorageToParse:any;
  
        localStorageToParse=localStorage.getItem('search-items');
  
        //we must parse the localStorage data because it is stored as string
  
        let localStorageToBePassedToHistoric:string[];
  
        localStorageToBePassedToHistoric=JSON.parse(localStorageToParse);
  
        /*
          we must reverse it, before passing to historic property on the gifs.service.ts.
          
          If we don´t make that "9,8,7,6,5..." is now "5,6,7,8,9..." that would imply
          that on the insert insertValueHistoric() method, when we reverse data again,
          it would be "5,6,7,8,9" and could not be shown in the order we want (the 9 must be the first)
  
        */
        localStorageToBePassedToHistoric.reverse();
  
  
        /*
         
          Data is now  "5,6,7,8,9"
        
          now we pass data to the historic property where we store the searchs
          before manipulating it in insertValueHistoric()
          
        */
  
        for (let item of localStorageToBePassedToHistoric){
          this._gifsService._historic.push(item);
        }
  
        /*
          on another property called reversedArray, we store data in the correct order
          before pushing it to localStorage inside insertValueHistoric().
  
          Data is still "5,6,7,8,9"
  
        */
  
        for (let i of this._gifsService._historic){
          this._gifsService.reversedArray.push(i);
        }
    
  
        /*
          As reversedArray data is still not reversed, we must reverse it
  
          Now it will be "9,8,7,6,5"
  
        */
    
        this._gifsService.reversedArray.reverse();
  
    
        /*
          We create an observable of this reversed array, observable will be shown
          with the async pipe where needed, to avoid using suscribe()
        */
    
        this._gifsService.historicObserv$=of(this._gifsService.reversedArray);
   
        
      }

  }
}
