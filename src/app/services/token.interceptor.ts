import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { map, Observable } from "rxjs";
import { StoreEntity } from '../ngrx/store/store';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    userToken: string = '';

    constructor(private store: Store<StoreEntity>) {
        this.store.select((state) => state.auth.token).subscribe({
            next: (token) => this.userToken = token,
            error: (err) => console.error(err)
        })
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modifiedReq = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${this.userToken}`),
        });
        return next.handle(modifiedReq);
    }
}