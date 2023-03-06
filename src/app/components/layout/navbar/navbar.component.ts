import { Component, OnInit } from '@angular/core';
import { signOut } from 'firebase/auth';
import { SocketService } from 'src/app/services/socket.service';
import { auth } from 'src/firebaseconfig';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public socketService: SocketService) { }

  ngOnInit(): void {
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
