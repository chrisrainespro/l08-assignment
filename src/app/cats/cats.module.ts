import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatComponent } from './components/cat/cat.component';
import { CatRoutingModule } from './cats-routing.module'
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CatComponent
  ],
  imports: [
    CommonModule,
    CatRoutingModule
  ]
})
export class CatsModule { }
