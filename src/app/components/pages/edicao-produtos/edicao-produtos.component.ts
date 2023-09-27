import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProdutosService } from 'src/app/services/produtos.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute } from '@angular/router';
import { ProdutosPutModel } from 'src/app/models/produtos-put.model';


@Component({
  selector: 'app-edicao-produtos',
  templateUrl: './edicao-produtos.component.html',
  styleUrls: ['./edicao-produtos.component.css'],
})
export class EdicaoProdutosComponent implements OnInit {
  mensagem: string = '';


  constructor(
    private produtosService: ProdutosService,
    private spinnerService: NgxSpinnerService,
    private activatedRoute: ActivatedRoute
  ) {}


  //Evento executado quando o componente é renderizado
  ngOnInit(): void {
    //capturando o id enviado na URL da rota
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;


    //exibindo o spinner
    this.spinnerService.show();


    //consultando o produto na API através do ID
    this.produtosService.getById(id).subscribe({
      next: (data) => {
        //preenchendo o formulário com os dados obtidos da api
        this.formEdicao.controls['id'].setValue(data.id);
        this.formEdicao.controls['nome'].setValue(data.nome);
        this.formEdicao.controls['descricao'].setValue(data.descricao);
        this.formEdicao.controls['preco'].setValue(data.preco.toString());
        this.formEdicao.controls['quantidade'].setValue(
          data.quantidade.toString()
        );


        //ocultar o spinner
        this.spinnerService.hide();
      },
    });
  }


  //Estrutura do formulário
  formEdicao = new FormGroup({
    /* campo 'id' */
    id: new FormControl('', []),
    /* campo 'nome' */
    nome: new FormControl('', [
      Validators.required /* campo obrigatório */,
      Validators.minLength(8) /* tamanho mínimo de caracteres */,
      Validators.maxLength(100) /* tamanho máximo de caracteres */,
    ]),
    /* campo 'descricao' */
    descricao: new FormControl('', [
      Validators.required /* campo obrigatório */,
      Validators.minLength(8) /* tamanho mínimo de caracteres */,
      Validators.maxLength(200) /* tamanho máximo de caracteres */,
    ]),
    /* campo 'preco' */
    preco: new FormControl('', [
      Validators.required /* campo obrigatório */,
      Validators.min(0) /* valor mínimo do campo */,
      Validators.max(999999) /* valor máximo do campo */,
    ]),
    /* campo 'quantidade' */
    quantidade: new FormControl('', [
      Validators.required /* campo obrigatório */,
      Validators.min(0) /* valor mínimo do campo */,
      Validators.max(9999) /* valor máximo do campo */,
    ]),
  });


  /*
    função para acessar os campos do formulário
    e as regras de validação mapeadas
    */
  get form(): any {
    return this.formEdicao.controls;
  }


  /* função para capturar o evento SUBMIT do formulário */
  onSubmit(): void {
   
    //exibindo o spinner
    this.spinnerService.show();


    //capturando os campos do formulário
    const model: ProdutosPutModel = {
      id: this.formEdicao.value.id as string,
      nome: this.formEdicao.value.nome as string,
      descricao: this.formEdicao.value.descricao as string,
      preco: parseFloat(this.formEdicao.value.preco as string),
      quantidade: parseInt(this.formEdicao.value.quantidade as string),
    };


    //fazendo a edição do produto
    this.produtosService.put(model).subscribe({
      next: (data) => {
        this.mensagem = `Produto '${data.nome}', atualizado com sucesso.`;
        this.spinnerService.hide(); //ocultando o spinner
      },
    });
  }
}



