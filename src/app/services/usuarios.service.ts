import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AutenticarRequestModel } from '../models/autenticar-request.model';
import { Observable } from 'rxjs';
import { AutenticarResponseModel } from '../models/autenticar-response.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class UsuariosService {


    //construtor
    constructor(
        private httpClient: HttpClient
    ) {}


    /* função para fazer a chamada de autenticação na API */
    autenticar(model: AutenticarRequestModel) : Observable<AutenticarResponseModel> {
        return this.httpClient.post<AutenticarResponseModel>(
            environment.usuariosApi + "/usuarios/autenticar",
            model
        );
    }
}




