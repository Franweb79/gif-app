import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  //historial

  private _historic:string[];

  public $historicObserv=new Observable<string[]>();

  constructor() { 

    this._historic=[];
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

  
  //function to insert values on historic

  public insertValueHistoric(valueToBeInserted:string){
    this._historic.push(valueToBeInserted);

    this.$historicObserv=of(this._historic);

    this.setItemOnLocalStorage(valueToBeInserted);


  }

  public setItemOnLocalStorage(valueToInsert:string){
    localStorage.setItem('search1',valueToInsert);

  }

 


}
