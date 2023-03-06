import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getToken } from 'src/app/ngrx/actions/auth.actions';
import { AuthService } from 'src/app/services/auth.service';
import { auth } from 'src/firebaseconfig';
import { StoreEntity } from '../../../ngrx/store/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(
    private authService: AuthService,
    private route: Router,
    private store: Store<StoreEntity>
  ) { }

  ngOnInit() {
  }

  login(event: SubmitEvent) {
    event.preventDefault();
    const { email, password } = this.loginForm.value;
    signInWithEmailAndPassword(auth, email as string, password as string)
      .then((userCredentials) => this.route.navigate(['/']))
      .catch((error) => console.error(error))
  }

}
