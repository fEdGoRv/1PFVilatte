import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursos: Curso[] = [
    {id: 1, nombre: 'Angular', comision:'32320', profesor:'Abner'},
    {id: 2,nombre: 'Python', comision:'32320', profesor:'Gustavo'},
    {id: 3,nombre: 'ReactJS', comision:'32320', profesor:'Lucas'},
    {id: 4,nombre: 'Sass', comision:'32320', profesor:'Fernando'},
  ];

  private cursosSubject: BehaviorSubject<Curso[]>;

  constructor() {
    this.cursosSubject = new BehaviorSubject<Curso[]>(this.cursos)
   }

   obtenerCursos(): Observable<Curso[]>{
    return this.cursosSubject.asObservable();
  }

  agregarCurso(curso: Curso){
    this.cursos.push(curso);
    this.cursosSubject.next(this.cursos);
  }

  editarCurso(curso: Curso){
    let indice = this.cursos.findIndex((c: Curso) => c.id === curso.id);
    if(indice > -1){
      this.cursos[indice] = curso;
    }
    this.cursosSubject.next(this.cursos);
  }
  
  eliminarCurso(id: number){
    let indice = this.cursos.findIndex((c: Curso) => c.id === id);
    if(indice > -1){
      this.cursos.splice(indice, 1);
    }
    this.cursosSubject.next(this.cursos);
  }
  
}
