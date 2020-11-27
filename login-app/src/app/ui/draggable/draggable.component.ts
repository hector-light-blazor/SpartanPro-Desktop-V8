import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-draggable',
  templateUrl: './draggable.component.html',
  styleUrls: ['./draggable.component.css']
})
export class DraggableComponent implements OnInit {
  @Input() height: string = '14px';
  constructor() { }

  ngOnInit(): void {
  }

}
