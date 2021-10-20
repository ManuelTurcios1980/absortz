import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoAvesComponent } from './info-aves/info-aves.component';
import { AppComponent } from '../app.component';

const routesMenu: Routes = [
   {path: 'InfoAves', component:InfoAvesComponent}
/*   {path: 'about', component: AboutComponent},
   {path: 'menubotones', component: MenubotonesComponent},
   {path: 'infoAves', component: InfoAvesComponent}*/
];

@NgModule({
  declarations:[AppComponent],
  imports: [RouterModule.forRoot(routesMenu),BrowserModule,routesMenu],
  exports: [RouterModule]

})
export class AppRoutingMenuModule { }