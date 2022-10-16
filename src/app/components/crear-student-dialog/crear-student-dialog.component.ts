import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-crear-student-dialog',
  templateUrl: './crear-student-dialog.component.html',
  styleUrls: ['./crear-student-dialog.component.css']
})
export class CrearStudentDialogComponent implements OnInit {
  
  formStudent: FormGroup = this.fb.group(
    {
      nombre:[null,Validators.required],
      apellido:[null,Validators.required],
      edad:[null,Validators.required],
      img:[null,Validators.required],
      email:[null,Validators.required],
      contrasena:[null,Validators.required]
    }
  )

  constructor(
    public dialogRef: MatDialogRef<CrearStudentDialogComponent>,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
  }

  guardar() {
    this.dialogRef.close(this.formStudent.value)
  }

}
