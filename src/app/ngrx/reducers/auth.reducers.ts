import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';

export const authState: { token: string, username: string, email: string } = { token: '', username: '', email: '' };

export const authReducer = createReducer(
    authState,
    on(AuthActions.generateToken, (state) => state),
    on(AuthActions.generateTokenSuccess, (state, result) => result.payload),
    on(AuthActions.generateTokenFailure, (state, result) => result.payload),
    on(AuthActions.getToken, (state) => state),
    on(AuthActions.getTokenSuccess, (state, result) => result.payload),
    on(AuthActions.getTokenFailure, (state, result) => result.payload),
);

