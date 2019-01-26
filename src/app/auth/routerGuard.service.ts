import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { isAuthentication } from '../store/selectors/auth.selectors';
import { map } from 'rxjs/operators';


@Injectable()
export class AppRouterGuard implements CanActivate {

    constructor(private store: Store<AppState>, private router: Router) { }
    canActivate( ): Observable<boolean> | boolean {

        const observable = this.store.select<boolean>(isAuthentication);
        return observable.pipe(
            map(res => {
                if(!res){
                   this.router.navigate(['']);
                }
               return res;
            }));


    }
}