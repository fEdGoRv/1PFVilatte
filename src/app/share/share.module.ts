import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.modul';
import { AuthorModule } from '../author/author.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    AuthorModule
  ],
  exports:[
    MaterialModule,
    AuthorModule
  ]
})
export class ShareModule { }
