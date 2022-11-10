import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticationRoutingModule } from './autentication/autentication-routing.module';
import { AutenticationGuard } from './core/guards/autentication.guard';
import { InicioComponent } from './core/inicio/inicio.component';
import { PaginaNoEncontradaComponent } from './core/pagina-no-encontrada/pagina-no-encontrada.component';
import { CursosRoutingModule } from './cursos/cursos-routing.module';
import { StudentRoutingModule } from './student/student-routing.module';



const routes: Routes = [
  { path: 'inicio', component: InicioComponent, canActivate: [AutenticationGuard] },
  { 
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then((m) => m.CursosModule),
    canActivate: [AutenticationGuard]
  },
  {
    path: 'student',
    loadChildren: () => import('./student/student-routing.module').then((m)=>m.StudentRoutingModule),
    canActivate: [AutenticationGuard]
  },
  { 
    path: 'autenticacion',
    loadChildren: () => import('./autentication/autentication.module').then((m) => m.AutenticationModule)
  },
  { path: '', redirectTo: 'inicio', pathMatch: 'full'},
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes),
  StudentRoutingModule,
  CursosRoutingModule,
  AutenticationRoutingModule
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
