import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProdutosPostModel } from 'src/app/models/produtos-post.model';
import { ProdutosService } from 'src/app/services/produtos.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.css'],
})
export class CadastroProdutosComponent {
  //atributo
  mensagem: string = '';

  //método construtor
  constructor(
    private produtosService: ProdutosService,
    private spinnerService: NgxSpinnerService
  ) {}

  //Estrutura do formulário
  formCadastro = new FormGroup({
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
    return this.formCadastro.controls;
  }

  /* função para capturar o evento SUBMIT do formulário */
  onSubmit(): void {
    //exibindo o spinner
    this.spinnerService.show();

    //capturando os campos do formulário
    const model: ProdutosPostModel = {
      nome: this.formCadastro.value.nome as string,
      descricao: this.formCadastro.value.descricao as string,
      preco: parseFloat(this.formCadastro.value.preco as string),
      quantidade: parseInt(this.formCadastro.value.quantidade as string),
    };

    //enviando para a API..
    this.produtosService.post(model).subscribe({
      next: (data) => {
        //exibindo mensagem
        this.mensagem = `Produto '${data.nome}', cadastrado com sucesso.`;
        //limpando os campos do formulário
        this.formCadastro.reset();
        //esconder o spinner
        this.spinnerService.hide();
      },
    });
  }
}
