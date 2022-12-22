import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';
import { ShareModule } from '../share/share.module';
import { AgregarCursoComponent } from './agregar-curso/agregar-curso.component';
import { CursoInicioComponent } from './curso-inicio/curso-inicio.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { TableComponent } from './table/table.component';
import { StoreModule } from '@ngrx/store';
import { cursosFeatureKey, reducer } from './state/cursos.reducer';


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
    CursosRoutingModule,
    StoreModule.forFeature(cursosFeatureKey, reducer)
  ],
  exports:[
    CursosRoutingModule
  ]
})
export class CursosModule { }
