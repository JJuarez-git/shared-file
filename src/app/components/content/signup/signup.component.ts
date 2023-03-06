import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from 'src/firebaseconfig';
import { AuthService } from '../../../services/auth.service';
import { generateToken } from 'src/app/ngrx/actions/auth.actions';
import { Store } from '@ngrx/store';
import { StoreEntity } from 'src/app/ngrx/store/store';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private authService: AuthService, private store: Store<StoreEntity>) { }

  ngOnInit() {
  }

  signUp(event: SubmitEvent) {
    event.preventDefault();
    const { username, email, password } = this.signUpForm.value;

    createUserWithEmailAndPassword(auth, email as string, password as string)
      .then(async (userCredential) => {
        this.authService.createUser({ email: email as string, username: username as string }).subscribe({
          next: (user: any) => this.store.dispatch(generateToken({ payload: { username: user.username, email: user.email } })),
          error: (error) => console.error(error)
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.error(error);
      });
  }

}