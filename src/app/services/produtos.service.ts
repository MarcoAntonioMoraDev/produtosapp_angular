import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProdutosGetModel } from '../models/produtos-get.model';
import { environment } from 'src/environments/environment';
import { ProdutosPostModel } from '../models/produtos-post.model';
import { ProdutosPutModel } from '../models/produtos-put.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  resource: string = '/produtos';

  /*
        Método construtor
    */
  constructor(
    //injeção de dependência
    private httpClient: HttpClient
  ) {}

  /*
    Método para fazer a requisição de cadastro
    de produto na API: POST /api/produtos
  */
  post(model: ProdutosPostModel): Observable<ProdutosGetModel> {
    return this.httpClient.post<ProdutosGetModel>(
      environment.produtosApi + this.resource,
      model
    );
  }

  /*
    Método para fazer a requisição de edição
    de produto na API: PUT /api/produtos
  */
  put(model: ProdutosPutModel): Observable<ProdutosGetModel> {
    return this.httpClient.put<ProdutosGetModel>(
      environment.produtosApi + this.resource,
      model
    );
  }

  /*
    Método para fazer a requisição de exclusão
    de produto na API: PUT /api/produtos
  */
  delete(id: string): Observable<ProdutosGetModel> {
    return this.httpClient.delete<ProdutosGetModel>(
      environment.produtosApi + this.resource + '/' + id
    );
  }

  /*
    Método para fazer a requisição de consulta
    de produtos na API: GET /api/produtos
   */
  getAll(): Observable<ProdutosGetModel[]> {
    return this.httpClient.get<ProdutosGetModel[]>(
      environment.produtosApi + this.resource
    );
  }

  /*
    Método para fazer a requisição de consulta
    de 1 produto na API: GET /api/produtos/{id}
   */
  getById(id: string): Observable<ProdutosGetModel> {
    return this.httpClient.get<ProdutosGetModel>(
      environment.produtosApi + this.resource + '/' + id
    );
  }
}
