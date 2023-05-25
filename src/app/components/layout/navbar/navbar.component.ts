import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { signOut } from 'firebase/auth';
import { Observable } from 'rxjs';
import { SocketService } from 'src/app/services/socket.service';
import { auth } from 'src/firebaseconfig';
import { StoreEntity } from '../../../ngrx/store/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username$!: Observable<string>;

  constructor(
    public socketService: SocketService,
    private store: Store<StoreEntity>
  ) { }

  ngOnInit(): void {
    this.username$ = this.store.select((state) => state.auth.username);
  }

  logOut() {
    signOut(auth)
      .then(() => {
        console.log("Log Out");
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
  }

}
