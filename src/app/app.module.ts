import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { CadastroProdutosComponent } from './components/pages/cadastro-produtos/cadastro-produtos.component';
import { ConsultaProdutosComponent } from './components/pages/consulta-produtos/consulta-produtos.component';
import { EdicaoProdutosComponent } from './components/pages/edicao-produtos/edicao-produtos.component';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CadastroProdutosComponent,
    ConsultaProdutosComponent,
    EdicaoProdutosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //adicionando a configurações das rotas do projeto
    HttpClientModule, //adicionando a biblioteca para consumo de APIs
    FormsModule, //adicionando a biblioteca para formulários reativos
    ReactiveFormsModule, //adicionando a biblioteca para formulários reativos
    BrowserAnimationsModule, //adicionando biblioteca para animações
    NgxSpinnerModule, //adicionando biblioteca ngx-spinner
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
