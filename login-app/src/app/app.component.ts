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
  hi: string;
  constructor(){

  }

  ngOnInit(){
    this.h = window.innerHeight;
    this.w = window.innerWidth;
    console.log(window['ipc']);
    window['ipc'].on('root', (data) => {
      this.hi = 'hello';
    });
    window['ipc'].on('on:local', (data) => {
      this.hi = 'hello two';
      alert(data);
    });

  }

  getHeight(): string{
    let response = '14px';
    if(this.showLogin){
      response = '30px';
    }
    return response;
  }
}
