import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  constructor() { }

  share(socialNetWorkName:string){

    if(socialNetWorkName==='facebook'){
      alert("share facebook");

    }
  }
}
