import { Component, OnInit } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';



import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-cookie-bar',
  templateUrl: './cookie-bar.component.html',
  styleUrls: ['./cookie-bar.component.css'],
  animations:[
    trigger('showOrHide',[

      state('initial',style({
        backgroundColor: 'transparent',
        transform: 'translateY(100%)'

        
      })),
      state('final',style({
        backgroundColor: '#15b000',
        transform: 'translateY(0%)'

        
      })),
      transition('initial=>final', animate('1000ms')),
      transition('final=>initial', animate('1000ms'))

    ])
      
    
  ]
})
export class CookieBarComponent implements OnInit {

  /*logica: 

  al entrar en la web (supongo que en el constructor de app componnet):
  si existe la cookie, no se muestra el aviso
  si no existe, se muestra.
    si se muestra, animacion de subida
    imagino que se puede hacer con una propiedad segun si existe la cookie o no y segun eso, mostrar el componente del cookie bar o no

  si damos a accept, seteamos la cookie y la propiedad que definamos a shouldShow=no, y animacion de bajada
  si damos a dont accept, la propiedad la definimos a shoudlshow=no, y animacion de bajada

  

  */

  public shouldCookiesBannerShow:string;

  public currentState:string;


  constructor( public _cookies:CookieService) {

    this.shouldCookiesBannerShow="yes";
    this.currentState='initial';
   }

  ngOnInit() {

    //if there is no cookie 
//TODO cambia esa url
    if(!this._cookies.check('movie-searcher.avanzartewebs.com')){

      /*if there is no cookie, we check if state is set to initial to display animation in 1500ms

      changing the current state property´s value which is attached to animation trigger*/

      if(this.currentState==="initial"){
        setTimeout(()=>{
  
          this.currentState="final";
  
  
        },1500);
      }


    }

   
  }

  public changeState(){

    
    this.currentState= (this.currentState==='initial') ? 'final': 'initial';

  }

  /*will be activated when pushed dont accept button*/


  public setCookieAndHideBanner(){

    this.changeState();

    //TODO cambia esa url
    this._cookies.set( 'movie-searcher.avanzartewebs.com', 'Cookie consent accepted',7 );

    //alert("set cookie and hide");

  }
  public onlyHideBanner(){

    this.changeState();

    //alert("only hide banner");
  }

}
