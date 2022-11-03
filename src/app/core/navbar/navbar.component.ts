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

  irACurso () {
    this.router.navigate(['cursos/'])
  };
  irAStudent () {
    this.router.navigate(['student/'])
  }; 
  
  
  ngOnInit(): void {
  }
}

