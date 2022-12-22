import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../cursos.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnDestroy {
  cursos!:Curso[];
  suscripcion: any = [];
  subscription = new Subscription();
  cursos$!: Observable<Curso[]>;
  columnas: string[] = ['id', 'imagen','nombre', 'comision', 'profesor', 'fechaInicio', 'fechaFin', 'editar', 'borrar'];
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>();
  error:any;
  loading:boolean = false;
  

  constructor(
    private cursosService: CursosService,
    private router: Router
  ) {
   }

  ngOnInit(): void {
   
 this.cursos$ = this.cursosService.obtenerCursos();
 this.suscripcion=this.cursos$.subscribe({
   next:(cursos:Curso[])=>{
     this.cursos=cursos
     this.dataSource.data=this.cursos
   }
  ,
  error: (error) => {
    console.error(error);
  }
});
}

  filtrar(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase();
  }

  eliminarCurso(id: number){
    this.cursosService.eliminarCurso(id);
    this.ngOnInit()
  }

  editarCurso(curso: Curso){
    this.router.navigate(['cursos/editar', curso]);
  }


    ngOnDestroy(){
      this.suscripcion.unsubscribe();
    }
    irAgregarCurso () {
      this.router.navigate(['cursos/agregar'])
    }; 

}