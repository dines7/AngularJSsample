import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularJS';
  type = "easy"

  displaymessage = function(){
    return "I am coming from app.component.css and this is " + this.type
  }
}
