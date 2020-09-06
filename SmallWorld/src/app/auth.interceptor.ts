import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../app/services/auth.service';

@Injectable()
export class AuInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        let token = this.authService.token();

        if (token) {
            request = request.clone({
                headers: request.headers.set('Authorization', `Basic ${token}`)
            });
        }

        return next.handle(request);
    }
}