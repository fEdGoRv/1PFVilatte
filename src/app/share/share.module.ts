import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.modul';
import { AuthorModule } from '../author/author.module';
import { HttpClientModule } from '@angular/common/http'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    AuthorModule,
    HttpClientModule
  ],
  exports:[
    MaterialModule,
    AuthorModule,
    HttpClientModule
  ]
})
export class ShareModule { }
