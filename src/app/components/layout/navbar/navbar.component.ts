import { Component, OnInit } from '@angular/core';
import { getUser, signOut } from 'src/app/helpers/auth.helper';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  autenticado: boolean | null = false;


  ngOnInit(): void {
    this.autenticado = getUser() != null;
  }


  logout(): void {
    if(window.confirm('Deseja realmente sair do sistema?')) {
      signOut();
      window.location.href = '/';
    }
  }
}





