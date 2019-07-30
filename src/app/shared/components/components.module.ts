import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PocketComponent } from './pocket/pocket.component';
import { CumulativePocketComponent } from './cumulative-pocket/cumulative-pocket.component';
import { BoardComponent } from './board/board.component';



@NgModule({
  declarations: [
    PocketComponent,
    CumulativePocketComponent,
    BoardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PocketComponent,
    CumulativePocketComponent,
    BoardComponent
  ]
})
export class ComponentsModule { }
