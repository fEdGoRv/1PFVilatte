import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';
import { StudentRoutingModule } from './student-routing.module';
import { StudentInicioComponent } from './student-inicio/student-inicio.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentNewComponent } from './student-new/student-new.component';



@NgModule({
  declarations: [
    StudentInicioComponent,
    StudentEditComponent,
    StudentListComponent,
    StudentNewComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    StudentRoutingModule
  ],
  exports: [
    ShareModule
  ]
})
export class StudentModule { }
