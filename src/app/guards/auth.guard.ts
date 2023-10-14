import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getUser } from '../helpers/auth.helper';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard {


  constructor(private router: Router) {}


  //método para verificar se a rota pode ser acessada
  canActivate(): boolean {
    //verificar se o usuário está autenticado
    if (getUser() != null) {
      //rota pode ser acessada
      return true;
    } else {
      //trocar a rota do usuário (página de login)
      this.router.navigate(['/pages/autenticar-usuario']);
      return false;
    }
  }
}




