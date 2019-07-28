import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pocket',
  templateUrl: './pocket.component.html',
  styleUrls: ['./pocket.component.scss']
})
export class PocketComponent implements OnInit {

  private value: number;
  constructor() {
    this.value = 7;
   }

  ngOnInit() {
  }

}
