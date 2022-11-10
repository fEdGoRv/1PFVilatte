import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-inicio',
  templateUrl: './student-inicio.component.html',
  styleUrls: ['./student-inicio.component.css']
})
export class StudentInicioComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  irTable () {
    this.router.navigate(['student/list'])
  };   
}
