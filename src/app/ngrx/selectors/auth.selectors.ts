import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authState } from '../reducers/auth.reducers';


export const getAuthState = createFeatureSelector<typeof authState>('spinner');

export const getNGRXAuth = createSelector(
    getAuthState,
    (state: typeof authState) => state
);
