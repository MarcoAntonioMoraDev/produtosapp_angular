import { Routes, RouterModule } from '@angular/router';
import { CadastroProdutosComponent } from './components/pages/cadastro-produtos/cadastro-produtos.component';
import { ConsultaProdutosComponent } from './components/pages/consulta-produtos/consulta-produtos.component';
import { EdicaoProdutosComponent } from './components/pages/edicao-produtos/edicao-produtos.component';
import { NgModule } from '@angular/core';
import { AutenticarUsuarioComponent } from './components/pages/autenticar-usuario/autenticar-usuario.component';
import { AuthGuard } from './guards/auth.guard';


//mapeamento das rotas do projeto
const routes: Routes = [
  { path: 'pages/autenticar-usuario', component: AutenticarUsuarioComponent },
  {
    path: 'pages/cadastro-produtos',
    component: CadastroProdutosComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'pages/consulta-produtos',
    component: ConsultaProdutosComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'pages/edicao-produtos/:id',
    component: EdicaoProdutosComponent,
    canActivate: [AuthGuard],
  },
  { path: '', pathMatch: 'full', redirectTo: '/pages/autenticar-usuario' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}




