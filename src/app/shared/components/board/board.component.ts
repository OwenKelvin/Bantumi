import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  players: { player1: {name: string}, player2: {name: string} };
  pockets: { player1: number [], player2: number []};
  cumulative: { player1: { value: number }, player2: { value: number }};
  @Input() noOfPockets: number;
  @Input() initialPocketValue: number;
  constructor() {
    this.pockets = { player1: [], player2: []};
    this.cumulative = { player1: { value: 0 }, player2: { value: 0 }};
  }
  makeMove(pocket: any) {
    alert(JSON.stringify(pocket));
  }
  ngOnInit() {
    this.players = {
      player1: { name: 'Player 1' },
      player2: { name: 'Player 2' }
    };
    this.pockets.player1 = [...Array(this.noOfPockets)].map(x => this.initialPocketValue);
    this.pockets.player2 = [...Array(this.noOfPockets)].map(x => this.initialPocketValue);
  }
}
