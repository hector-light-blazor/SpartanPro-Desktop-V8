import { transition, trigger, style, animate, state } from '@angular/animations';
import { Component, OnInit} from '@angular/core';

declare var ipc: any;
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
    ipc.on('root', (data) => {
      this.hi = data;
    });
    ipc.on('on:local', (data) => {
      this.hi = data;
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
