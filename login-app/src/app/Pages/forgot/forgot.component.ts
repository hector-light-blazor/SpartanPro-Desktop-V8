import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  @Output() onback = new EventEmitter<null>();
  constructor() { }

  ngOnInit(): void {
  }

  goBack(): void{
    this.onback.emit(null);
  }

}
