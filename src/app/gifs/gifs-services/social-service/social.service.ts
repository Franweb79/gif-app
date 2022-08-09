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

    }else if(socialNetWorkName==='tumblr'){

      let tags="avanzartewebs.com,gifsearcher.avanzartewebs.com,giphy,Twitter:@FranDeveloper79,@FranDeveloper79";
      let postType="photo";

      let tumblrUrl="https://www.tumblr.com/share";

      let totalUrl=`${tumblrUrl}?posttype=${postType}&url=${urlString}&tags=${tags}`;

      window.open(totalUrl,'_blank');


    }
  }

   //https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
  copyLinkToClipBoard(stringToBePassed:string, event:any){
    let textToCopy;

    navigator.clipboard.writeText(stringToBePassed);

    //show "copied link" box
    event.target.parentElement.children[1].style.opacity='1';

    //hide "copied link" box after certain time

    setTimeout(()=>{

      event.target.parentElement.children[1].style.opacity='0';

    },2000);
  }


  
}
