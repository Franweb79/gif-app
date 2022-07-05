import { Injectable, ElementRef, ViewChild, Renderer2 } from '@angular/core';

//TODO mira que es esto de declare
declare var window: any;
declare var FB: any;

 

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  /*
    property to control copy to clipboard and show a text if copied,
    through an animation
    
  */

  public isCopied=false;


  constructor() { }

  share(socialNetWorkName:string, urlString:string){

    if(socialNetWorkName==='facebook'){
     // alert("share facebook");

     //TODO lo del FB mira arriba eso del declare var
      FB.ui({

        method: 'share_open_graph',
        action_type:'og.shares',
        action_properties: JSON.stringify({
          object : {
             'og:url': urlString, // your url to share,
             'og_image':urlString
            
             
             
          }

        })
        
       
          /* TODO https://stackoverflow.com/questions/10444347/share-link-to-posts-when-using-fb-ui*/
        })

    }else if(socialNetWorkName==='twitter'){

      let twitterUrl=`https://twitter.com/intent/tweet?url=${urlString}&hashtags=gifsearcher,avanzartewebs&via=FranDeveloper79`;

      window.open(twitterUrl,'_blank');

    }
  }

  
}
