import { Routes, RouterModule } from '@angular/router';
import { CadastroProdutosComponent } from './components/pages/cadastro-produtos/cadastro-produtos.component';
import { ConsultaProdutosComponent } from './components/pages/consulta-produtos/consulta-produtos.component';
import { EdicaoProdutosComponent } from './components/pages/edicao-produtos/edicao-produtos.component';
import { NgModule } from '@angular/core';

//mapeamento das rotas do projeto
const routes: Routes = [
  { path: 'pages/cadastro-produtos', component: CadastroProdutosComponent },
  { path: 'pages/consulta-produtos', component: ConsultaProdutosComponent },
  { path: 'pages/edicao-produtos/:id', component: EdicaoProdutosComponent },
  { path: '', pathMatch: 'full', redirectTo: '/pages/consulta-produtos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
