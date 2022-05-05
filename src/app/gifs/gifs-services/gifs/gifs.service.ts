import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  //historial

  private _historic:string[];

  // we declare a property to store the reversed array.


  public reversedArray:string[];


  public historicObserv$:Observable<string[]>;

  constructor() { 

    this._historic=[];

    this.reversedArray=[];

    this.historicObserv$=new Observable<string[]>();

  }

  /*
    getter from _historic, because we will need to expose things from this array,
  */


  //we declare getter without _ on method name to avoid confussions
  get historic(){
    //return this._historic;

    /* TODO fernando says it is better to break the reference 
    with the spread operator and create a new array, because we could change something on the original
    array, UNDERSTAND THIS*/

    return [...this._historic];

  }

  
  /*
    function to insert values on historic.

    We will not onlt insert the value, but will make all the logic
    to show it on the html, also insert it on the local storage

    We want to show the newest search items on the first place,
    so we will have to reverse the array which contain the historic(_historic)

    We don´t want to modify the original array, it would give lots of problems
    when reversing several times and such, I think it is better always having a reference
    to the original array with no modifications

  */

  public insertValueHistoric(valueToBeInserted:string){

    /*
      we must empty the reversed array before inserting each value
      to avoid that it shows prior stored data
   */
    this.reversedArray=[];

    //we insert new value on original array

    //if we hace searched more than 5 times, we delete the first search with shift

    this._historic.push(valueToBeInserted);

    if(this._historic.length>5){
      this._historic.shift();
    }

    console.log (this._historic);
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

    //this.setItemOnLocalStorage(valueToBeInserted);

    this.setItemsOnLocalStorage();
  }

  public setItemsOnLocalStorage(){
    
    //localStorage.clear();

    localStorage.setItem('search-items',JSON.stringify(this.reversedArray));
    
   /* for(let i=0; i<this.reversedArray.length;++i){

      localStorage.setItem(`search-${i+1}`,this.reversedArray[i]);
    }*/
    //localStorage.setItem('search1',valueToInsert);

  }

 


}
