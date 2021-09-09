import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MenubotonesComponent } from './menubotones/menubotones.component';
const routes: Routes = [
   {path: 'about', component: AboutComponent},
   {path: 'menubotones', component: MenubotonesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
