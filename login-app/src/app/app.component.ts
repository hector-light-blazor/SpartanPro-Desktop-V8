import { transition, trigger, style, animate, state } from '@angular/animations';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [trigger('simpleFadeAnimation', [

    
    transition(':enter', [
      style({ opacity: 0 }),
      animate(200),
    ]),
    transition(':leave', [
      animate(300, style({  transform: 'scale(0)' }))
    ])
  ])],
})
export class AppComponent implements OnInit {
  showLogin: boolean = true;
  showForgot: boolean = false;
  w:any = null;
  h:any = null;
  constructor(){

  }

  ngOnInit(){
    this.h = window.innerHeight;
    this.w = window.innerWidth;
  }

  getHeight(): string{
    let response = '14px';
    if(this.showLogin){
      response = '30px';
    }
    return response;
  }
}
