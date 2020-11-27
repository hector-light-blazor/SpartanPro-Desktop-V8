import { Component, OnInit, Input, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() type: String;
  @Input() placeholder: String;
  @Input() name: String;
  @Input() class: String;
  @Input() disabled: boolean = false;
  value: string;
  ifSymbol: boolean = false;
  constructor() { }

  ngOnInit(): void {
    if(this.type == "email"){
      this.disabled = false;
    }
  }

  emailFormat(): void{
    
    if(this.type == "email" && this.value){
      this.ifSymbol = !this.value.includes("@");
    }else {
      this.ifSymbol = false;
    }
  }

}
