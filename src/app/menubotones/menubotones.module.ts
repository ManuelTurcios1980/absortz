import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoAvesComponent } from './info-aves/info-aves.component';
import {MenubotonesComponent }  from './menubotones.component';
import { AplicSugeridasComponent } from './aplic-sugeridas/aplic-sugeridas.component'


@NgModule({
  declarations: [
    InfoAvesComponent,
    MenubotonesComponent,
    AplicSugeridasComponent
  ],
  imports: [
    CommonModule 
    
  ]
})
export class Menubotones { }
