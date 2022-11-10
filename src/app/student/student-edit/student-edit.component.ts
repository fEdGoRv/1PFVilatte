import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  formulario!: FormGroup;
  student!: Persona;

  constructor(
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((parametros) => {
      console.log(parametros)

      this.student = {
        id: parseInt(parametros.get('id') || '0'),
        nombre: parametros.get('nombre') || '',
        apellido: parametros.get('apellido') || '',
        edad: parseInt(parametros.get('edad') || ''),
        img: parametros.get('img') || '',
        email: parametros.get('email') || '',
        contrasena: parametros.get('contrasena') || ''
      }

      this.formulario = new FormGroup({
        Image: new FormControl(parametros.get('img')),
        Name: new FormControl(parametros.get('nombre'), [Validators.required]),
        Surname: new FormControl(parametros.get('apellido')),
        Age: new FormControl(parametros.get('edad')),
        Email: new FormControl(parametros.get('email')),
        Contrasena: new FormControl(parametros.get('contrasena'))
      });
    })
    }


editarStudent() { 
    let s: Persona = {
      id: this.student.id,
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      edad: this.formulario.value.edad,
      img: this.formulario.value.img,
      email: this.formulario.value.email,
      contrasena: this.formulario.value.contrasena
    }

    this.studentService.editarStudent(s);

    this.router.navigate(['student/list'])
  }
}
