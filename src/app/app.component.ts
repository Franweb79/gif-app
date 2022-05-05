import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { GifsService } from './gifs/gifs-services/gifs/gifs.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'gif-app';

  constructor(public _gifsService:GifsService){
    
  }

  ngOnInit(): void {

    if(localStorage.length>0){

      let localStorageToParse:any //TODO make non null assertion operator ! work and delete the any;
      localStorageToParse=localStorage.getItem('search-items');

      let localStorageToBePassedToHistoric:string[];

      localStorageToBePassedToHistoric=JSON.parse(localStorageToParse);
      console.log ("local to be passed to historic", localStorageToBePassedToHistoric);
      localStorageToBePassedToHistoric.reverse();

      console.log ("local to be passed to historic tras ponerlo bien", localStorageToBePassedToHistoric);


      for (let item of localStorageToBePassedToHistoric){
        this._gifsService._historic.push(item);
      }
     // this._gifsService.historic=JSON.parse(localStorageToParse);
      console.log ('historic tras parsear', this._gifsService._historic);


      //this._gifsService.historic.reverse();
      //console.log ('historic tras ponerlo bien otra vez', this._gifsService.historic);


      for (let i of this._gifsService._historic){
        this._gifsService.reversedArray.push(i);
      }
  
      console.log ('reversed tras pasar datos del historic', this._gifsService.reversedArray);

      //Then we reverse it
  
      this._gifsService.reversedArray.reverse();

      console.log ('reversed tras reversear', this._gifsService.reversedArray);

  
      /*
        We create an observable of this reversed array, observable will be shown
        with the async pipe where needed, to avoid using suscribe()
      */
  
      this._gifsService.historicObserv$=of(this._gifsService.reversedArray);
  //console.log (this._gifsService.reversedArray);
      //this.setItemOnLocalStorage(valueToBeInserted);
  
     // this._gifsService.setItemsOnLocalStorage();

     // this._gifsService.historic.reverse();
      //console.log(JSON.parse(localStorageToParse));
      
    }

  }
}
