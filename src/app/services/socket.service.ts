import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { getWorkspace } from '../ngrx/actions/workspace.actions';
import { StoreEntity } from '../ngrx/store/store';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private _socket: Socket;
  socketStatus = false;

  constructor(private store: Store<StoreEntity>) {
    this._socket = io(environment.apiURL);
    this.checkStatus();
  }

  checkStatus() {
    this._socket.on('connect', () => {
      console.log("Conectado al socket");
      this.socketStatus = true;
      this.store.dispatch(getWorkspace())
    });

    this._socket.on('disconnect', () => {
      console.log("Desconectado del socket");
      this.socketStatus = false;
    });
  }

  get socketId() {
    return this._socket.id;
  }

  emit(event: string, payload?: any, callback?: Function) {
    this._socket.emit(event, payload, callback)
  }

  listen(event: string): Observable<any> {
    return new Observable((Subscriber) => {
      this._socket.on(event, (payload) => {
        Subscriber.next(payload)
      })
    })
  }
}
