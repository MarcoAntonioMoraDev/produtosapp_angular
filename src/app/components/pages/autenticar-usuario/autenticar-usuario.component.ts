import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { signIn } from 'src/app/helpers/auth.helper';
import { AutenticarRequestModel } from 'src/app/models/autenticar-request.model';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-autenticar-usuario',
  templateUrl: './autenticar-usuario.component.html',
  styleUrls: ['./autenticar-usuario.component.css'],
})
export class AutenticarUsuarioComponent implements OnInit {
  //variáveis do componente
  mensagem: string = '';


  //contrutor
  constructor(
    private usuariosService: UsuariosService,
    private spinnerService: NgxSpinnerService
  ) {}


  /* formulário de autenticação */
  formAutenticar = new FormGroup({
    /* campo 'email' */
    email: new FormControl('', [Validators.required, Validators.email]),
    /* campo 'senha' */
    senha: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])(?=.{8,})/
      ),
    ]),
  });


  /* função para acessar os campos do formulário */
  get form(): any {
    return this.formAutenticar.controls;
  }


  ngOnInit(): void {}


  /* função para capturar o SUBMIT do formulário */
  onSubmit(): void {
    this.spinnerService.show();


    //capturando os campos do formulário
    const model: AutenticarRequestModel = {
      email: this.formAutenticar.value.email as string,
      senha: this.formAutenticar.value.senha as string,
    };


    this.usuariosService
      .autenticar(model)
      .subscribe({
        next: (data) => {
          //gravar na localstorage
          signIn(data);
          //redirecionar para a página de consulta de produtos
          window.location.href = '/pages/consulta-produtos';
        },
        error: (e) => {
          this.mensagem = e.error.message;
        },
      })
      .add(() => {
        this.spinnerService.hide();
      });
  }
}




