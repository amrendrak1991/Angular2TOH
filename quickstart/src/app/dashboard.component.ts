import {Component, OnInit} from "@angular/core";
@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',

})
export class DashboardComponent implements OnInit{

  heroes : Hero[] = [];

  constructor
  ngOnInit(): void {

  }

}
