import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css']
})
export class RemoteComponent implements OnInit {

  users: any = [];

  constructor(private restapi: ServiceService) { }

  getRemoteUser = function () {
    this.restapi.getRemoteUser().subscribe((response) => {
      console.log(response)
      this.users = response
      console.log(this.users)
    }, function (error) { })
  }
  getemployeebyid = function (id) {
    this.restapi.getEmployeebyId(id).subscribe((response) => {
      console.log(response)
    }, function (error) { })
  }

  getemployeedelete = function (id) {
    this.restapi.deleteemployee(id).subscribe((response) => {
      console.log(response)
      this.message = response.success.text
      this.getRemoteUser()
    }, function (error) { })
  }
  employee = {
    "name": "ATOM",
    "salary": "99999999999999",
    "age": "16"
  }

  addemployeenew = function () {
    
    this.restapi.addemployee(this.employee).subscribe((response) => {
      console.log(response)
      this.getRemoteUser()
    })
}

  ngOnInit() {
    this.getRemoteUser()
  }
}
