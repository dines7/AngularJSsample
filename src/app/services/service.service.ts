import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

getRemoteUser(){
  //return this.http.get("http://jsonplaceholder.typicode.com/users")
  return this.http.get("http://dummy.restapiexample.com/api/v1/employees")
  
}

getEmployeebyId(ID){
  return this.http.get("http://dummy.restapiexample.com/api/v1/employee/"+ID)  
}

deleteemployee(ID){
  return this.http.delete("http://dummy.restapiexample.com/api/v1/delete/"+ID)  
}

addemployee(employee){
  return this.http.post("http://dummy.restapiexample.com/api/v1/create",employee)  
}
}
