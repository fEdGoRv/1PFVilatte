import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Persona } from 'src/app/models/persona';
import { CrearStudentDialogComponent } from '../crear-student-dialog/crear-student-dialog.component';


@Component({
  selector: 'app-amb-student',
  templateUrl: './amb-student.component.html',
  styleUrls: ['./amb-student.component.css']
})
export class AmbStudentComponent implements OnInit {
  [x: string]: any;
  public STUDENTS : Array<Persona> = [
    {
        id: 1,
        nombre: 'Enrique',
        apellido: 'Garcia',
        edad: 28,
        img: 'https://i.pinimg.com/474x/2e/ee/06/2eee0661f0f9f06a95a8fd35269f2b0e--kung-fu-panda-animation.jpg',
        email: 'enrique****@gmail.com',
        contrasena: 'asd147'
    }, {
        id: 2,
        nombre: 'Pablo',
        apellido: 'Armando',
        edad: 32,
        img: 'https://i.pinimg.com/222x/0d/4f/84/0d4f84081c19627e9ba1130651e9a339.jpg',
        email: 'pablin@gmail.com',
        contrasena: 'asd123'
    }, {
        id: 3,
        nombre: 'Julio',
        apellido: 'Blanco',
        edad: 34,
        img: 'https://i.pinimg.com/236x/97/15/0e/97150e0166fc22a4557efcbc3fe479cc--kung-fu-panda--pandas.jpg',
        email: 'julioasd2@gmail.com',
        contrasena: 'asd789'
    }, {
        id: 4,
        nombre: 'Omar',
        apellido: 'Salvadot',
        edad: 48,
        img: 'https://image.jimcdn.com/app/cms/image/transf/dimension=210x1024:format=png/path/s39145781b4b2fa7a/image/i8e80b058a09cb1e3/version/1474202594/image.png',
        email: 'Omarsito@gmail.com',
        contrasena: 'asd456'
    }
]; 

  constructor(private dialog: MatDialog) { }
   
  ngOnInit(): void {
  }

  openDialog() {
    let dialog = this.dialog.open(CrearStudentDialogComponent, {
      width: '50%',
      height: '50%',
      
    });

    dialog.beforeClosed().subscribe(res => {
      console.log(res);
      this.STUDENTS.push(
        {
          ...res,
          id:this.STUDENTS.length+1
        }
      )   
    })
  }

}
