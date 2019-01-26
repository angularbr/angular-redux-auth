import { Action } from '@ngrx/store';
import { Authentication } from '../../contracts/authenticate';

export enum AuthActionsType {
    AUTH_LOAD = '[Authentication] Authentication load',
    AUTH_SUCCESS = '[Authenication] Authentication success',
    AUTH_FAIL = '[Authenication] Authentication fail',
    USER_LOGOUT = '[Authenication] User logout',
    USER_LOGIN = '[Authentication] User login',
}

export class AuthLoad implements Action {
    readonly type = AuthActionsType.AUTH_LOAD;
}
export class AuthLogin implements Action {
    readonly type = AuthActionsType.USER_LOGIN;
    constructor(public payload: { 'email': string, 'password': string }) { }
}
export class AuthSuccess implements Action {
    readonly type = AuthActionsType.AUTH_SUCCESS;
    constructor(public payload: Authentication) { }
}
export class AuthFail implements Action {
    readonly type = AuthActionsType.AUTH_FAIL;
    constructor(public payload: any) { }
}

export class AuthLogout implements Action {
    readonly type = AuthActionsType.USER_LOGOUT;
}



export type AuthActions = AuthLoad | AuthLogin | AuthSuccess | AuthFail | AuthLogout;
