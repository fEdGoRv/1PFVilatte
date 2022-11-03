import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso-inicio',
  templateUrl: './curso-inicio.component.html',
  styleUrls: ['./curso-inicio.component.css']
})
export class CursoInicioComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  irTable () {
    this.router.navigate(['cursos/listar'])
  };   
}
