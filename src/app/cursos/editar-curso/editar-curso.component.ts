import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {

  formulario!: FormGroup;
  curso!: Curso;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cursosService: CursosService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      console.log(parametros)

      this.curso = {
        id: parseInt(parametros.get('id') || '0'),
        nombre: parametros.get('nombre') || '',
        comision: parametros.get('comision') || '',
        profesor: parametros.get('profesor') || '',
        fechaInicio: new Date(parametros.get('fechaInicio') || ''),
        fechaFin: new Date(parametros.get('fechaFin') || ''),
        inscripcionAbierta: parametros.get('inscripcionAbierta') === 'true',
        imagen: parametros.get('imagen') || ''
      }

      this.formulario = new FormGroup({
        nombre: new FormControl(parametros.get('nombre'), [Validators.required]),
        comision: new FormControl(parametros.get('comision')),
        profesor: new FormControl(parametros.get('profesor')),
        inicio: new FormControl(parametros.get('fechaInicio')),
        fin: new FormControl(parametros.get('fechaFin')),
        inscripcionAbierta: new FormControl(parametros.get('inscripcionAbierta'))
      });
    })
  }
  editarCurso() {
    let c: Curso = {
      id: this.curso.id,
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      profesor: this.formulario.value.profesor,
      fechaInicio: this.formulario.value.fechaInicio,
      fechaFin: this.formulario.value.fechaFin,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      imagen: ''
    }

    this.cursosService.editarCurso(c);

    this.router.navigate(['cursos/listar'])
  }

}
