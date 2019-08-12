import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pocket',
  templateUrl: './pocket.component.html',
  styleUrls: ['./pocket.component.scss']
})
export class PocketComponent implements OnInit {

  private value: number;
  @Input() inputValue: number;
  @Output() makeMove = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.value = this.inputValue;
  }
  moveRequest() {
    this.makeMove.emit('makeMove');
  }

}
