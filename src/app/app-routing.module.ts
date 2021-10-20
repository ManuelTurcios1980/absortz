import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MenubotonesComponent } from './menubotones/menubotones.component';
import { InfoAvesComponent } from './menubotones/info-aves/info-aves.component';
import { InfoBovinosComponent } from './menubotones/info-bovinos/info-bovinos.component';
import { AplicSugeridasComponent } from './menubotones/aplic-sugeridas/aplic-sugeridas.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
   {path: 'about', component: AboutComponent},
   {path: 'menubotones', component: MenubotonesComponent},
   {path: 'InfoAves', component:InfoAvesComponent},
   {path: 'InfoBovinos', component: InfoBovinosComponent},
   {path: 'AplicSugeridas', component:AplicSugeridasComponent},
   {path: 'Contact', component:ContactComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
