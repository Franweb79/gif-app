import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookiesComponent } from './shared/shared-components/cookies/cookies.component';
import { PrivacyComponent } from './shared/shared-components/privacy/privacy.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
