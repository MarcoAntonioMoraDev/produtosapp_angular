import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { getUser } from "../helpers/auth.helper";


@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
        //verificando se a requisição é para a API de produtos
        if(req.url.includes('/api/produtos')) {
            //pegar o token do usuário autenticado
            const model = getUser();
            if(model != null) {
                req = req.clone({
                    setHeaders: { Authorization: `Bearer ${model.accessToken}` }
                });
            }
        }


        return next.handle(req);
    }
}