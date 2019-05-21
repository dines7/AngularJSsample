import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css']
})
export class RemoteComponent implements OnInit {

  users:any=[];

  constructor(private restapi:ServiceService) { }

  ngOnInit() {
    this.restapi.getRemoteUser().subscribe((response)=>{
      console.log(response)
      this.users = response
      console.log(this.users)
     }, function(error){})    
  }
}
