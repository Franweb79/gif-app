import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Datum, GiphyResponse, Pagination } from '../../../interfaces/giphy-response-interfaces';
import { Data, GiphyRandomGIFResponse } from '../../../interfaces/giphy-random-gif-response';

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

  /*
    will check if we have just opened our app -no search-, to show welcome

    it we search something, we will set to true, then show search result and no welcome screen

  */

  public isSomethingSearched:boolean;

  // we declare a property to store the reversed array.


  public reversedArray:string[];


  public historicObserv$:Observable<string[]>;

  //to store the data retrieved on getGiphyAPIData() 
 // public APIdata:Datum[];

  public APIdata:Datum[];

  public GiphyRandomGIFResponse!:Data;


  constructor(private _http:HttpClient) { 

    this._historic=[];

    this.isSomethingSearched=false;

    this.reversedArray=[];

    this.historicObserv$=new Observable<string[]>();

    this.APIdata=[];

   

    

    


  }

  
  /*
    function to insert values on historic.

    SEE README´s "notes for developers" number 2

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

    let wholeQueryString:string=`${environment.apisearchURL}${environment.apiKey}&limit=10&q=${searchQueryParameter}`;

  
    this._http.get<GiphyResponse>(wholeQueryString).subscribe({
      next: (response:GiphyResponse)=>{

        this.APIdata=response.data;

        /*
        
          once we have data -pictures- to show, we set value of 
          isSomethingSearched to true, then welcome screen is not shown again

        */

        this.isSomethingSearched=true;
        
        console.log (response);
      },
      error: (err)=>{
        console.log(`there is one error fetching data from Giphy API`)
        console.log (err);
      }
    });


  }

  getRandomResult(searchText:string):void{

    let searchQueryParameter=`${searchText}`;

    let wholeQueryString:string=`${environment.apiRandomURL}${environment.apiKey}&tag=${searchQueryParameter}&rating=g`;


    this._http.get<GiphyRandomGIFResponse>(wholeQueryString).subscribe({
      next: (response:GiphyRandomGIFResponse)=>{

        this.GiphyRandomGIFResponse=response.data;


        console.log ("random")
        console.log (response);
      },
      error: (err)=>{
        console.log(`there is one error fetching data from Giphy API`)
        console.log (err);
      }
    });


  

  }

 


}
