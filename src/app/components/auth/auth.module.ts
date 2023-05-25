import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/modules/primeng/primeng.module';
import { LoginComponent } from './content/login/login.component';
import { SignupComponent } from './content/signup/signup.component';
import { AuthComponent } from './auth-component/auth.component';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
