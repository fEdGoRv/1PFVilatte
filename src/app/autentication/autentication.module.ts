import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { ShareModule } from '../share/share.module';





@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ]
})
export class AutenticationModule { }
