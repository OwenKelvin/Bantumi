import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pocket',
  templateUrl: './pocket.component.html',
  styleUrls: ['./pocket.component.scss']
})
export class PocketComponent implements OnInit {

  private value = 7;
  @Input() inputValue: number;
  constructor() { }

  ngOnInit() {
    this.value = this.inputValue;
  }

}
