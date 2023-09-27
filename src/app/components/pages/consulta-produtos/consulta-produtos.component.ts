import { Component, OnInit } from '@angular/core';
import { ProdutosGetModel } from 'src/app/models/produtos-get.model';
import { ProdutosService } from 'src/app/services/produtos.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-consulta-produtos',
  templateUrl: './consulta-produtos.component.html',
  styleUrls: ['./consulta-produtos.component.css'],
})
export class ConsultaProdutosComponent implements OnInit {
  /*
  Atributos
  */
  produtos: ProdutosGetModel[] = [];
  produto: ProdutosGetModel | null = null;
  mensagem: string = '';

  /*
  Método construtor
  */
  constructor(
    private produtosService: ProdutosService,
    private spinnerService: NgxSpinnerService
  ) {}

  /*
    Evento executado no momento em que o componente é renderizado!
  */
  ngOnInit(): void {
    //exibindo o componente spinner
    this.spinnerService.show();

    //Executando a chamada para o serviço de consulta de produtos
    this.produtosService.getAll().subscribe({
      next: (data) => {
        //armazenar os dados obtidos da consulta
        this.produtos = data;
        //ocultando o spinner
        this.spinnerService.hide();
      },
    });
  }

  /*
  Função executada ao clicar no 
  botão de exclusão do grid
  */
  onDelete(item: ProdutosGetModel): void {
    //guardar os dados do produto selecionado
    this.produto = item;
  }

  /*
  Função para confirmar e executar
  a exclusão do produto selecionado
  */
  onDeleteConfirm(): void {
    //exibir o conteudo do ngx-spinner
    this.spinnerService.show();
    //executando a exclusão
    this.produtosService.delete(this.produto?.id as string).subscribe({
      next: (data) => {
        //exibindo mensagem na página
        this.mensagem = `Produto '${data.nome}', excluído com sucesso.`;
        //ocultando o spinner
        this.spinnerService.hide();
        //executando o evento ngOnInit
        this.ngOnInit();
      },
    });
  }
}
