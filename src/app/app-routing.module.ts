import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookiesComponent } from './shared/shared-components/cookies/cookies.component';
import { PrivacyComponent } from './shared/shared-components/privacy/privacy.component';
import { LegalComponent } from './shared/shared-components/legal/legal.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: '/',
    pathMatch: 'full'
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
