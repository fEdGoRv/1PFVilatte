import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCursoComponent } from './agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';
import { TableComponent } from './table/table.component';
import { CursoInicioComponent } from './curso-inicio/curso-inicio.component'
import { AutenticationGuard } from '../core/guards/autentication.guard';
import { AdminGuard } from '../core/guards/admin.guard';


const routes: Routes=[
  { path: 'cursos', children: [
    {path:'',  component: CursoInicioComponent},
    { path: 'listar', component: TableComponent },
    { path: 'editar', component: EditarCursoComponent, canActivate: [AutenticationGuard,AdminGuard] },
    { path: 'agregar', component: AgregarCursoComponent, canActivate: [AutenticationGuard,AdminGuard] }
  ]}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class CursosRoutingModule { }
