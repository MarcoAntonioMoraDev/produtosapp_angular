
/*
    Modelo de dados para a resposta
    de autenticação de usuários
*/
export class AutenticarResponseModel {
    id: string = '';
    nome: string = '';
    email: string = '';
    dataHoraAcesso: Date | null = null;
    accessToken: string = '';
    dataHoraExpiracao: Date | null = null;
  }
  
  
  
  
  