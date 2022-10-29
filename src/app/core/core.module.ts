import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../cursos/navbar/navbar.component';
import { ShareModule } from '../share/share.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    InicioComponent,
    PaginaNoEncontradaComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ],
  exports:[
    ToolbarComponent
  ]
})
export class CoreModule { }
