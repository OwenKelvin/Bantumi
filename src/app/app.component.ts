import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  noOfPockets: number;
  initialPocketValue: number;
  title: string;
  constructor() {
    this.title = 'Bantumi';
    this.noOfPockets = 7;
    this.initialPocketValue = 4;
  }
}
