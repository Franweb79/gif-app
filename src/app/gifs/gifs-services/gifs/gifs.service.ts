import { Injectable } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  
  /*
  TODO this property maybe should be private, but getter and setter
  was giving me problems on components so at this moment i let it as public,
  maybe will be changed in the future for security resetFakeAsyncZone

  It stores the searchs before reversing and pushing them to the localStorage
  */

  public _historic:string[];

  // we declare a property to store the reversed array.


  public reversedArray:string[];


  public historicObserv$:Observable<string[]>;

  constructor() { 

    this._historic=[];

    this.reversedArray=[];

    this.historicObserv$=new Observable<string[]>();

  }

  
  /*
    function to insert values on historic.

    SEE README´s "notes for developers" number 2

    //TODO make a test of this method, we insert 5 values and must return
    an array with reversed data "9,8,7,6,5" and if we insert another value
    the 5 must dissappear and must come new one e.g. "a,9,8,7,6"

  */

  public insertValueHistoric(valueToBeInserted:string){

    /*
      we must empty the reversed array before inserting each value
      to avoid that it shows prior stored data
   */
    this.reversedArray=[];

    //we insert new value on original array

    //if we have searched more than 5 times, we delete the first search with shift

    this._historic.push(valueToBeInserted);

    if(this._historic.length>5){
      this._historic.shift();
    }

    
    //we push each element of original array to this copy


    for (let i of this._historic){
      this.reversedArray.push(i);
    }

    //Then we reverse it

    this.reversedArray.reverse();

    /*
      We create an observable of this reversed array, observable will be shown
      with the async pipe where needed, to avoid using suscribe()
    */

    this.historicObserv$=of(this.reversedArray);


    this.setItemsOnLocalStorage();
  }

  public setItemsOnLocalStorage(){
    

    localStorage.setItem('search-items',JSON.stringify(this.reversedArray));
    
 

  }

 


}
