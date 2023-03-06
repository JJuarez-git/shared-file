import { createAction, props } from "@ngrx/store";

export const GENERATE_TOKEN = '[Auth Component] Generate Token';
export const GENERATE_TOKEN_SUCCESS = '[Auth Component] Generate Token Success';
export const GENERATE_TOKEN_FAILURE = '[Auth Component] Generate Token Failure';

export const GET_TOKEN = '[Auth Component] Get Token';
export const GET_TOKEN_SUCCESS = '[Auth Component] Get Token Success';
export const GET_TOKEN_FAILURE = '[Auth Component] Get Token Failure';

export const generateToken = createAction(GENERATE_TOKEN, props<{ payload: { username: string, email: string } }>());
export const generateTokenSuccess = createAction(GENERATE_TOKEN_SUCCESS, props<{ payload: { token: string, username: string, email: string } }>());
export const generateTokenFailure = createAction(GENERATE_TOKEN_FAILURE, props<any>());

export const getToken = createAction(GET_TOKEN, props<{ payload: { email: string } }>());
export const getTokenSuccess = createAction(GET_TOKEN_SUCCESS, props<{ payload: { token: string, username: string, email: string  } }>());
export const getTokenFailure = createAction(GET_TOKEN_FAILURE, props<any>());