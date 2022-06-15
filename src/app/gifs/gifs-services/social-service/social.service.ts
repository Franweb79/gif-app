import { Injectable } from '@angular/core';

//TODO mira que es esto de declare
declare var window: any;
declare var FB: any;

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  constructor() { }

  share(socialNetWorkName:string){

    if(socialNetWorkName==='facebook'){
      alert("share facebook");

      FB.ui({
        method: 'share',
        href: 'https://media3.giphy.com/media/xhUxk4RWT6XkYamSsS/giphy.gif?cid=cfbd9c7fz9ifdhtvg4b4utt9jmd0qvw4mj804p064lqyaf21&rid=giphy.gif&ct=g  '
      });

    }
  }
}
