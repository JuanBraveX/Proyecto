import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { LoginComponent } from './componentes/login/login.component';
import { ListarComponent } from './componentes/listar/listar.component';
import { EditarComponent } from './componentes/editar/editar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ListarAlumComponent } from './componentes/listar-alum/listar-alum.component';
import { MainComponent } from './componentes/main/main.component';
import { PresentacionClubComponent } from './componentes/presentacion-club/presentacion-club.component'

@NgModule({
  declarations: [
    AppComponent,
    AgregarComponent,
    LoginComponent,
    ListarComponent,
    EditarComponent,
    RegistroComponent,
    ListarAlumComponent,
    MainComponent,
    PresentacionClubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
