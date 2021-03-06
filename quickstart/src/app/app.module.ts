import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroDetailsComponent } from "./hero-detail.component";
import {HeroesComponent} from "./heroes.component";
import {HeroService} from "./hero.service";
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";

@NgModule({

  providers: [HeroService],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path : '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
      path : 'heroes',
      component: HeroesComponent
      },
      {
        path : 'dashboard',
        component: DashboardComponent
      }])
  ],
  declarations: [ AppComponent,  HeroDetailsComponent, HeroesComponent, DashboardComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
