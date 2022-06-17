import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';


import { NavbarComponent } from './shared-components/navbar/navbar.component';
import { CookieBarComponent } from './shared-components/cookie-bar/cookie-bar.component';
import { CookiesComponent } from './shared-components/cookies/cookies.component';
import { PrivacyComponent } from './shared-components/privacy/privacy.component';
import { LegalComponent } from './shared-components/legal/legal.component';


@NgModule({
  declarations: [
    NavbarComponent,
    CookieBarComponent,
    CookiesComponent,
    PrivacyComponent,
    LegalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    TranslateModule //TODO PON QUE TUVISTE QUE PONERLO AQUI TB EN EL SHARED MODULE PA QUE 
    //TRANSLATE PIPE EN EL HTML DEL COOKIE BAR NO DIERA ERROR

    //https://stackoverflow.com/a/68301637/6791921
   
  ],
  exports:[
    NavbarComponent,
    CookieBarComponent,
    CookiesComponent,
    PrivacyComponent,
    TranslateModule
]
    
  })
  
export class SharedModule { }
