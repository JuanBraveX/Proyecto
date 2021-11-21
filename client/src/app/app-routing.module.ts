import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgregarComponent } from './componentes/agregar/agregar.component';
import { EditarComponent } from './componentes/editar/editar.component';
import { ListarAlumComponent } from './componentes/listar-alum/listar-alum.component';
import { ListarComponent } from './componentes/listar/listar.component';
import { LoginComponent } from './componentes/login/login.component';
import { MainComponent } from './componentes/main/main.component';
import { PresentacionClubComponent } from './componentes/presentacion-club/presentacion-club.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'login', component: LoginComponent },
  { path: 'listar', component: ListarComponent },
  { path: 'agregar', component: AgregarComponent },
  { path: 'editar/:id', component: EditarComponent },
  { path: 'main', component: MainComponent },
  { path: 'listarAlu', component: ListarAlumComponent },
  { path: 'presentacion/:id', component: PresentacionClubComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
