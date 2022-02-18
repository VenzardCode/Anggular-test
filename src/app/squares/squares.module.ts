import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquaresComponent } from './squares.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: SquaresComponent,
  }
]


@NgModule({
  declarations: [
    SquaresComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class SquaresModule { }
