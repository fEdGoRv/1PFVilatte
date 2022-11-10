import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private httpHeaders: HttpHeaders = new HttpHeaders({
    'content-type': 'aplication/json',
    'encoding': 'UTF-8'
  })

  constructor(private http: HttpClient) { }


  editarStudent(student: Persona) {
    this.http.put(`${environment.api}/students/${student.id}`, student).pipe(catchError(this.manejarError)).subscribe(console.log)

  }
  obtenerStudents(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${environment.api}/students`, { headers: this.httpHeaders }).pipe(catchError(this.manejarError));
  }

  obtenerStudent(id: number): Observable<Persona> {
    return this.http.get<Persona>(`${environment.api}/students/${id}`, {
      headers: this.httpHeaders
    }).pipe(catchError(this.manejarError))
  }

  agregarStudent(student: Persona) {
    this.http.post(`${environment.api}/students`, student, {
      headers: this.httpHeaders
    }).pipe(catchError(this.manejarError)).subscribe(console.log)
  }

  eliminarStudent(id: number) {
    this.http.delete(`${environment.api}/students/${id}`).pipe(catchError(this.manejarError)).subscribe(console.log)
  }




  private manejarError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.warn('Error del lado del cliente', error.error.message);
    } else {
      console.warn('Error del lado del servidor', error.error.message);
    }

    return throwError(() => new Error('Error en la comunicacion HTTP'));
  }

}
