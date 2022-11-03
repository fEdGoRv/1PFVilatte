import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ShareModule } from '../share/share.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    InicioComponent,
    PaginaNoEncontradaComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ],
  exports:[
    ToolbarComponent,
    NavbarComponent
  ]
})
export class CoreModule { }
