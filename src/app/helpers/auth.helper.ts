import { AutenticarResponseModel } from '../models/autenticar-response.model';


const key = 'auth-user';


/*
    função para gravar dados na local storage
*/
export function signIn(model: AutenticarResponseModel): void {
  //gravar os dados na local storage
  localStorage.setItem(key, JSON.stringify(model));
}


/*
    função para ler os dados da local storage
*/
export function getUser(): AutenticarResponseModel | null {
  //ler os dados da local storage
  const data = localStorage.getItem(key);
  //verificando se algum dado foi obtido
  if (data != null) {
    //converter de string para objeto
    const model = JSON.parse(data);
    //verificando se o token não expirou
    const dataAtual = new Date();
    const dataExpiracao = new Date(model.dataHoraExpiracao as Date);
    if (dataAtual <= dataExpiracao) {
      return model;
    }
  }


  return null;
}


/*
    função para apagar os dados da localstorage
*/
export function signOut(): void {
  localStorage.removeItem(key);
}




