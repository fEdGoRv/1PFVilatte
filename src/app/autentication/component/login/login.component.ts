import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/core/services/sesion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup

  constructor(
    private sesionService: SesionService,
    private router: Router
  ) { 
    this.formulario = new FormGroup({
      usuario: new FormControl('Fede'),
      contrasena: new FormControl('hoy.123'),
      admin: new FormControl(true)
    })
  }

  login(){
    console.log(this.formulario.value);
    this.sesionService.login(this.formulario.value.usuario, this.formulario.value.contrasena, this.formulario.value.admin);
    this.router.navigate(['inicio']);
  }


  ngOnInit(): void {
  }

}
