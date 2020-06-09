import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { SummaryPageComponent } from './summary-page/summary-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { PassengersPageComponent } from './passengers-page/passengers-page.component';
import { SeatChoiceComponent } from './seat-choice/seat-choice.component';
import { SummaryBoxComponent } from './summary-box/summary-box.component';


const routes: Routes = [
  { path: '', redirectTo: "/main-page", pathMatch: "full" },
  { path: 'main-page', component: MainPageComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'details-page', component: DetailsPageComponent },
  { path: 'summary-page', component: SummaryPageComponent },
  { path: 'navigation-bar', component: NavigationBarComponent },
  { path: 'passengers-page', component: PassengersPageComponent },
  { path: 'seat-choice', component: SeatChoiceComponent },
  { path: 'summary-box', component: SummaryBoxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [MainPageComponent, LoginPageComponent, DetailsPageComponent, SummaryPageComponent]