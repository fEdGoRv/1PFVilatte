import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from 'src/app/models/curso';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  cursos: Curso[] = [
    {id: 1, nombre: 'Angular', comision:'32320', profesor:'Abner'},
    {id: 2,nombre: 'Python', comision:'32320', profesor:'Gustavo'},
    {id: 3,nombre: 'ReactJS', comision:'32320', profesor:'Lucas'},
    {id: 4,nombre: 'Sass', comision:'32320', profesor:'Fernando'},
  ];
  columnas: string[] = ['nombre', 'comision', 'profesor', 'editar', 'borrar'];
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>(this.cursos);
  
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  filtrar(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;

    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase();
  }

  editar(){
    this.dialog.open(DialogComponent, {
      width: '350px'
    })
  }

  eliminar(elemento: Curso){
    this.dataSource.data = this.dataSource.data.filter((curso: Curso) => curso.id != elemento.id);
    console.log('boton de eliminar')
  }
  borrar(id: number) {
    delete(this.cursos[id-1])
    this.dataSource.data = this.cursos
  }

}