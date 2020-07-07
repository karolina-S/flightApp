import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { SummaryPageComponent } from './summary-page/summary-page.component';
import { PassengersPageComponent } from './passengers-page/passengers-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SummaryBoxComponent } from './summary-box/summary-box.component';
import { SeatChoiceComponent } from './seat-choice/seat-choice.component';

import { HttpClientModule } from '@angular/common/http';
import { SeatChoiceInternationalComponent } from './seat-choice-international/seat-choice-international.component';
import { SeatChoiceWorldComponent } from './seat-choice-world/seat-choice-world.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginPageComponent,
    DetailsPageComponent,
    SummaryPageComponent,
    routingComponents,
    PassengersPageComponent,
    NavigationBarComponent,
    SummaryBoxComponent,
    SeatChoiceComponent,
    SeatChoiceInternationalComponent,
    SeatChoiceWorldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
