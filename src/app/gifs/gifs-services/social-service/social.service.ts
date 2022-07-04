import { Injectable } from '@angular/core';

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

  //https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
  copyLinkToClipBoard(stringToBePassed:string){
    let textToCopy;
    //alert("cop"+stringToBePassed);

    navigator.clipboard.writeText(stringToBePassed);

    this.isCopied=true;

    setTimeout(()=>{
      this.isCopied=false;
    },2000);
  }
}
