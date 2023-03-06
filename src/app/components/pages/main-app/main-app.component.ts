import { Component, OnInit } from '@angular/core';
import { ActionsSubject, Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { getToken } from 'src/app/ngrx/actions/auth.actions';
import { getNGRXAuth } from 'src/app/ngrx/selectors/auth.selectors';
import { StoreEntity } from 'src/app/ngrx/store/store';
import { auth } from '../../../../firebaseconfig';
import { getWorkspace } from '../../../ngrx/actions/workspace.actions';
import { GET_TOKEN_SUCCESS } from '../../../ngrx/actions/auth.actions';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.css']
})
export class MainAppComponent implements OnInit {

  tkn!: string;

  constructor(
    private actionsSubject$: ActionsSubject,
    private store: Store<StoreEntity>
  ) { }

  ngOnInit() {
    // AQUI SE HARAN SUBSCRIPCIONES AL INICIAR SESION
    this.store.dispatch(getToken({ payload: { email: auth.currentUser?.email as string } }));

    this.actionsSubject$.pipe(filter((action) => action.type === GET_TOKEN_SUCCESS)).subscribe({
      next: (authData: any) => {
        this.store.dispatch(getWorkspace({ payload: { workspace: authData.payload.username } }))
      }
    })



  }

}
