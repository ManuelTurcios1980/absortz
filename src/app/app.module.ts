import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { AboutComponent } from './about/about.component';
import { MenubotonesComponent } from './menubotones/menubotones.component';
import { LogoComponent } from './logo/logo.component';
import { InfoBovinosComponent } from './menubotones/info-bovinos/info-bovinos.component';
import { AplicSugeridasComponent } from './menubotones/aplic-sugeridas/aplic-sugeridas.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';



//import { AngularFireModule } from '@angular/fire';
/*import { AngularFireModule } from '@angular/fire';
import { angular-fire-firestoreModule } from '@angular/fire/firestore/lite';
import { environment } from '../environments/environment'
import { DataDbService } from './services/data-db.service';*/


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    MenubotonesComponent,
    LogoComponent,
    InfoBovinosComponent,
    AplicSugeridasComponent,
    ContactComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
   /* AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule*/
  ],
  providers: [/*DataDbService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
