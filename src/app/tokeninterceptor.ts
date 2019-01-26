import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from './auth/authentication.service';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private authservice: AuthenticationService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token: string = this.authservice.getToken();
        request = request.clone({
            setHeaders: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        return next.handle(request);
    }
}