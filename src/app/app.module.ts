import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ShareModule } from './share/share.module';
import { CursosModule } from './cursos/cursos.module';
import { StudentModule } from './student/student.module';
import { CoreModule } from './core/core.module';

import { AutenticationModule } from './autentication/autentication.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShareModule,
    CursosModule,
    StudentModule,
    CoreModule,
    AutenticationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
