import { Component, OnInit, TRANSLATIONS_FORMAT } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations'
import { transformAll } from '@angular/compiler/src/render3/r3_ast';
import { Transform } from 'stream';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations:[
    trigger("animateParagraph",[state("one",style({ 
      color:'red',
      Transform:'scale(1)',
      letterSpacing:'5px'
    })), 
    state("two",style(
      {color:'green',
      Transform:'scale(2)'
    })), 
    transition('one <-> two', animate('2000ms ease-in'))])
  ]
})
export class AnimationComponent implements OnInit {

  myState = "two"

  constructor() { }

  ngOnInit() {
  }
 
  animateText = function(){
    this.myState = this.myState ==="two" ? "one" : "two"
  }
}
