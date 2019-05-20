import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,  Validators } from '@angular/forms'

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

  myForm:any

  constructor() { }

  ngOnInit() {
    this.myForm=new FormGroup({
      fn: new FormControl("", Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.pattern("^[a-zA-Z]+$")
        ])
      ),
      score: new FormControl("", Validators.compose([
        Validators.min(10),
        Validators.required
      ])),
      hobby: new FormControl()
    })    
  }
  sumbitForm = function(reactiveforms){
    console.log(reactiveforms)
    console.log(reactiveforms.value)
  }
}
