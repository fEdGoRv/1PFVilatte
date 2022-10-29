import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCursoComponent } from './agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';
import { TableComponent } from './table/table.component';
import { CursoInicioComponent } from './curso-inicio/curso-inicio.component'


const routes: Routes=[
  { path: 'cursos', component: CursoInicioComponent, children: [
    { path: 'listar', component: TableComponent },
    { path: 'editar', component: EditarCursoComponent },
    { path: 'agregar', component: AgregarCursoComponent }
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
