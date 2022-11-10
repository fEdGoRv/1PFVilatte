import { Dialog } from '@angular/cdk/dialog';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-new',
  templateUrl: './student-new.component.html',
  styleUrls: ['./student-new.component.css']
})
export class StudentNewComponent implements OnInit {

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
    public dialogRef: MatDialogRef<StudentNewComponent>,
    private fb:FormBuilder,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Dialog | any,
    private router: Router,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
  }

  guardar(){
    const s =this.dialogRef.close(this.formStudent.value)
    
    this.router.navigate(['student/list'])
  }


  
}
