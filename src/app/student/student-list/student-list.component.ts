import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/models/persona';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, OnDestroy {

  student$!: Observable<Persona[]>
  students!: Persona[]
  suscripcion: any = []
  dataSource: MatTableDataSource<Persona> = new MatTableDataSource

  constructor(
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.student$ = this.studentService.obtenerStudents();
    this.suscripcion = this.student$.subscribe({
      next: (students: Persona[]) => {
        this.students = students
        this.dataSource.data = this.students
      }
      ,
      error: (error) => {
        console.error(error);
      }
    })
  }

  displayedColumns: string[] = ['id', 'img', 'nombre', 'apellido', 'edad', 'email','editar', 'borrar'];

  editarStudent(student: Persona) {
    this.router.navigate(['student/edit', student]);
  }
  eliminarStudent(id:number){
      this.studentService.eliminarStudent(id);
      this.ngOnInit()
  }

  openDialog() { }

  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }
  addStudent(){
    this.router.navigate(['student/new'])
  }
  
}


