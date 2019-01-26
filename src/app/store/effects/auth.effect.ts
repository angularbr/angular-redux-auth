import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { map, switchMap, catchError, tap } from 'rxjs/operators';

import * as fromActions from '../actions/auth.action'
import { AuthenticationService } from '../../auth/authentication.service';

@Injectable()
export class AuthEffect {

    @Effect()
    login$ = this.actions$.pipe(
        ofType(fromActions.AuthActionsType.USER_LOGIN),
        map((action: fromActions.AuthLogin) => action.payload),
        switchMap(fromPayload => {
            return this.service.login(fromPayload.email, fromPayload.password).pipe(
                map((response) => {
                    return new fromActions.AuthSuccess(response);
                }),
                catchError(error => of(new fromActions.AuthFail(error)))
            )
        })
    );

    @Effect({ dispatch: false })
    authenticated$ = this.actions$.pipe(
        ofType(fromActions.AuthActionsType.AUTH_SUCCESS),
        map((action: fromActions.AuthSuccess) => action.payload),
        tap((token) => {
            console.log(token);
            sessionStorage.setItem('jwt-token', token.token);
            this.router.navigate(['']);
        })
    );

    @Effect({ dispatch: false }) // prevent memory leaks
    logout$ = this.actions$.pipe(
        ofType(fromActions.AuthActionsType.USER_LOGOUT),
        tap(auth => {
            console.log(auth);
            sessionStorage.removeItem('jwt-token');
            this.router.navigate([''])
        })
    );

    constructor(
        private service: AuthenticationService,
        private actions$: Actions,
        private router: Router
    ) { }
}