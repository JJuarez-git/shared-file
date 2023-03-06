import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import * as AuthActions from '../actions/auth.actions';

@Injectable()
export class AuthEffects {

    generateToken$ = createEffect((): any => this.actions$.pipe(
        ofType(AuthActions.generateToken),
        mergeMap((action: any) => this.authService.generateToken(action.payload).pipe(
            map((payload: any) => ({ type: AuthActions.GENERATE_TOKEN_SUCCESS, payload })),
            catchError((error) => AuthActions.generateTokenFailure(error))
        )))
    );

    getToken$ = createEffect((): any => this.actions$.pipe(
        ofType(AuthActions.getToken),
        mergeMap((action: any) => this.authService.getToken(action.payload.email).pipe(
            map((payload: any) => ({ type: AuthActions.GET_TOKEN_SUCCESS, payload })),
            catchError((error) => AuthActions.generateTokenFailure(error))
        )))
    );

    constructor(
        private actions$: Actions,
        private authService: AuthService
    ) { }
}