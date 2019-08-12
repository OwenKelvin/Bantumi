import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cumulative-pocket',
  templateUrl: './cumulative-pocket.component.html',
  styleUrls: ['./cumulative-pocket.component.scss']
})
export class CumulativePocketComponent implements OnInit {

  @Input() inputValue: number;
  value: number;
  constructor() {
   }

  ngOnInit() {
    this.value = this.inputValue;
  }

}
