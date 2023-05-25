import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit, OnDestroy {

  boxes = [1, 2, 3, 4, 5]
  status = 'Stopped';
  action = 'stop';
  subscription!: Subscription;

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.subscription = this.socketService.listen('change-status-emit').subscribe(payload => {
      this.status = payload.status;
      this.action = payload.action;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
