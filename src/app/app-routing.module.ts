import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { I18nPage } from './demo/i18n/i18n.page';
import { ButtonPage } from './demo/button/button.page';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: AppComponent },
  { path: 'button', pathMatch: 'full', component: ButtonPage },
  { path: 'i18n', pathMatch: 'full', component: I18nPage },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
