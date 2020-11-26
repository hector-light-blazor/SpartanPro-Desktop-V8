import { transition, trigger, style, animate } from '@angular/animations';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [trigger('myInsertRemoveTrigger', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('200ms', style({ opacity: 1 })),
    ]),
    transition(':leave', [
      animate('400ms', style({ opacity: 0 }))
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
}
