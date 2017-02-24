/**
 * Created by Novopay on 17-02-2017.
 */
import {Component, Input} from '@angular/core';
import {Hero} from "./hero";

@Component({
  selector :'my-hero-details',
  template : `
<div *ngIf="hero">
      <h1>{{fortitle}}</h1>
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name">
      </div>
    </div>
`
})
export class HeroDetailsComponent {

  @Input('fortitle')
  fortitle : number /*= 10*/;

/*myfunc(): void {
  this.fortitle += 2;
};*/

  @Input('hero')
  hero: Hero;
}

