import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/components/auth/content/login/login.component';
import { SignupComponent } from 'src/app/components/auth/content/signup/signup.component';
import { AuthComponent } from './auth-component/auth.component';
import { NoAuthAllowedGuard } from '../../guards/no-auth-allowed.guard';

const routes: Routes = [
  {
    path: '', component: AuthComponent,
    canActivate: [NoAuthAllowedGuard], 
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
