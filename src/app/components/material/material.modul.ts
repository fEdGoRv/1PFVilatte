import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTreeModule} from '@angular/material/tree';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatTreeModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule
  ],
  exports:[
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatTreeModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule
  ]
})
export class MaterialModule { 
  
}