import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import { NavComponent } from './nav.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    AppRoutingModule
  ],
  exports:[
    NavComponent,
    MatMenuModule,
    CommonModule
  ]
})
export class NavModule { }
