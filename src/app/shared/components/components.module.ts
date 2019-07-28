import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PocketComponent } from './pocket/pocket.component';



@NgModule({
  declarations: [PocketComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PocketComponent
  ]
})
export class ComponentsModule { }
