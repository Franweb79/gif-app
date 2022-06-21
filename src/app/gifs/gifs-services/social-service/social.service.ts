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
     // alert("share facebook");

      FB.ui({

        method: 'share_open_graph',
        action_type:'og.shares',
        action_properties: JSON.stringify({
          object : {
             'og:url': urlString, // your url to share,
             'og_image':urlString
            
             
             
          }

        })
        
       /* method:'share',
        href:urlString*/

          /* TODO https://stackoverflow.com/questions/10444347/share-link-to-posts-when-using-fb-ui*/
        })

        /*

        method: 'share_open_graph',
        action_type:'og.shares',
        action_properties: JSON.stringify({
          object : {
             'og:url': urlString, // your url to share,
             'og_image':urlString
            
             
             
          }

        });
        */
        /*href: urlString,
        quote: "Hi there"*/
      


    }
  }
}
