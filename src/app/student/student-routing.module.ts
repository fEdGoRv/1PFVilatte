import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentInicioComponent } from './student-inicio/student-inicio.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentNewComponent } from './student-new/student-new.component';

const routes: Routes=[
  {path:'student', children: [
    {path:'', component: StudentInicioComponent},
    {path:'edit', component: StudentEditComponent},
    {path:'list', component: StudentListComponent},
    {path: 'new', component: StudentNewComponent}
  ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class StudentRoutingModule { }
