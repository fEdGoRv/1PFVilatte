import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/models/persona';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  student$: Observable<Persona[]>
  students!:Persona[]

  constructor(
    private studentService: StudentService
  ) { 
    this.student$=this.studentService.obtenerStudents();
  }

  ngOnInit(): void {
    
  }
  openDialog(){}

  
}
