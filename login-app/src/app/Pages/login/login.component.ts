import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() close = new EventEmitter<null>();
  constructor() { }

  ngOnInit(): void {
  }

  onForgot(): void
  {
      this.close.emit();
  }

}
