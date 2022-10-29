import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './core/inicio/inicio.component';
import { PaginaNoEncontradaComponent } from './core/pagina-no-encontrada/pagina-no-encontrada.component';
import { CursosRoutingModule } from './cursos/cursos-routing.module';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full'},
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  CursosRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
