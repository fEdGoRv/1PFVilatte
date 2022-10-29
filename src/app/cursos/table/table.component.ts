import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from 'src/app/models/curso';
import { MatDialog } from '@angular/material/dialog';
import { EditarCursoComponent } from '../editar-curso/editar-curso.component';
import { CursosService } from '../cursos.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnDestroy {
  cursos!:Curso[];
  suscripcion: any;
  cursos$!: Observable<Curso[]>;
  columnas: string[] = ['nombre', 'comision', 'profesor', 'editar', 'borrar'];
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>(this.cursos) ;
  
  constructor(
    private dialog: MatDialog,
    private cursosService: CursosService,
    private router: Router
  ) {
     this.suscripcion=this.cursos$.subscribe({
      next:(cursos:Curso[])=>{this.cursos=cursos}
     ,
     error: (error) => {
       console.error(error);
     }
   });
   }

  ngOnInit(): void {
    this.cursos$ = this.cursosService.obtenerCursos();
  }

  filtrar(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase();
  }

  editar(){
    this.dialog.open(EditarCursoComponent, {
      width: '350px'
    })
  }
  eliminarCurso(id: number){
    this.cursosService.eliminarCurso(id);
  }

  editarCurso(curso: Curso){
    this.router.navigate(['cursos/editar', curso]);
  }

  //eliminar(elemento: Curso){
  //  this.dataSource.data = this.dataSource.data.filter((curso: Curso) => //curso.id != elemento.id);
  //  console.log('boton de eliminar')
  //  this.dataSource.data = this.cursos
  //}
  borrar(id: number) {
    delete(this.cursos[id-1])
    this.dataSource.data = this.cursos }

    ngOnDestroy(){
      this.suscripcion.unsubscribe();
    }

}