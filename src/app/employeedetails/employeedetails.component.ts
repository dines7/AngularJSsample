import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  activeid:any
activeEmployee : any
  //constructor(private activeRoute:ActivatedRoute, private restapi:RestapiService) { }

  ngOnInit() {
//this.activeid = this.activeRoute.snapshot.params.id
this.activeid.restapi.getEmployeeBYid(this.activeid)
  }

}
