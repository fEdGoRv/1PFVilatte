import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {



  constructor(
    private http: HttpClient
  ) {

  }

  obtenerCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${environment.api}/cursos`, {
      headers: new HttpHeaders({
        'content-type': 'aplication/json',
        'encoding': 'UTF-8'
      })
    }).pipe(catchError(this.manejarError))
  }


  obtenerCurso(id: number): Observable<Curso> {
    return this.http.get<Curso>(`${environment.api}/cursos/${id}`, {
      headers: new HttpHeaders({
        'content-type': 'aplication/json',
        'encoding': 'UTF-8'
      })
    }).pipe(catchError(this.manejarError))
  }

  agregarCurso(curso: Curso) {
    this.http.post(`${environment.api}/cursos`, curso, {
      headers: new HttpHeaders({
        'content-type': 'aplication/json',
        'encoding': 'UTF-8'
      })
    }).pipe(catchError(this.manejarError)).subscribe(console.log)
  }


  editarCurso(curso: Curso) {
    this.http.put(`${environment.api}/cursos/${curso.id}`, curso).pipe(catchError(this.manejarError)).subscribe()
  }

  eliminarCurso(id: number) {
    this.http.delete(`${environment.api}/cursos/${id}`).pipe(catchError(this.manejarError)).subscribe(console.log)
  }
  private manejarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.warn('Error del lado del cliente', error.error.message);
    }else{
      console.warn('Error del lado del servidor', error.error.message);
    }

    return throwError(() => new Error('Error en la comunicacion HTTP'));
  }

}
