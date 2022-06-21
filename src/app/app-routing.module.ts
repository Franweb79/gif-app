import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookiesComponent } from './shared/shared-components/cookies/cookies.component';
import { PrivacyComponent } from './shared/shared-components/privacy/privacy.component';
import { LegalComponent } from './shared/shared-components/legal/legal.component';
import { GifsCardsComponent } from './gifs/gifs-components/gifs-cards/gifs-cards.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path:'main',
    component:GifsCardsComponent
  },
  {
    path:'privacy',
    component:PrivacyComponent
  },
  {
    path:'cookies',
    component:CookiesComponent
  },
  {
    path:'legal',
    component:LegalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
