import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  activeid:any

  constructor() { }

  ngOnInit() {
//this.activeid = this.activeRoute.snapshot.params.id
this.activeid.restapi.getEmployeeBYid(this.activeid)
  }

}
