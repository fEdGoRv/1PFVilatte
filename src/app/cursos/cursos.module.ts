import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';
import { ShareModule } from '../share/share.module';
import { AgregarCursoComponent } from './agregar-curso/agregar-curso.component';
import { CursoInicioComponent } from './curso-inicio/curso-inicio.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    TableComponent,
    EditarCursoComponent,
    AgregarCursoComponent,
    CursoInicioComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    CursosRoutingModule
  ],
  exports:[
    CursosRoutingModule
  ]
})
export class CursosModule { }
