import { transition, trigger, style, animate } from '@angular/animations';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [trigger('slideInOut', [
    transition(':enter', [
      style({ transform: 'translateY(-100%)' }),
      animate('900ms ease-in', style({ transform: 'translateY(0%)'})),
    ]),
    transition(':leave', [
      animate('200ms ease-in', style({ transform: 'translateY(-100%)' }))
    ])
  ])],
})
export class AppComponent implements OnInit {
  showLogin: boolean = false;
  showForgot: boolean = true;
  w:any = null;
  h:any = null;
  constructor(){

  }

  ngOnInit(){
    this.h = window.innerHeight;
    this.w = window.innerWidth;
  }
}
