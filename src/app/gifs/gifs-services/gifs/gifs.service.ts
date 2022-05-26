import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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

  //to store the data retrieved on getGiphyAPIData() 
  public APIdata:any;

  constructor(private _http:HttpClient) { 

    this._historic=[];

    this.reversedArray=[];

    this.historicObserv$=new Observable<string[]>();

    this.APIdata=[]; /*it will sotre an array of objects, so despite it is any,
    initialize as athe array it will be to avoid problems iterating with ngFor
    */



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

  /*
    parameter must be string or undefined because valueToInsert on vanvar.component.ts is declared so to avoid an error.
    More details on that valueToInsert´s declaration
  */
  public getGiphyAPIData(searchText:string | undefined){

    let searchQueryParameter=`${searchText}`;

    let wholeQueryString:string=`${environment.apiURL}${environment.apiKey}&limit=10&q=${searchQueryParameter}`;

    console.log(wholeQueryString);

    this._http.get(wholeQueryString).subscribe(
    (data:any)=>{

      this.APIdata=data.data;
      console.log (data.data);
    },

    (err)=>{
      console.log (err);
    }
    );



  }

 


}
