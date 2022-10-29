import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 

  constructor(
    private router: Router
  ) {}

  irAgregarCurso () {
    this.router.navigate(['cursos/agregar'])
  };
  irEditarCurso () {
    this.router.navigate(['cursos/editar'])
  }; 
  irTable () {
    this.router.navigate(['cursos/listar'])
  };   
  
  ngOnInit(): void {
  }
}

