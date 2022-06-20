import { Injectable } from '@angular/core';

//TODO mira que es esto de declare
declare var window: any;
declare var FB: any;

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  constructor() { }

  share(socialNetWorkName:string, urlString:string){

    if(socialNetWorkName==='facebook'){
      alert("share facebook");

      FB.ui({
        method: 'share',
        href: urlString
      });

    }
  }
}
