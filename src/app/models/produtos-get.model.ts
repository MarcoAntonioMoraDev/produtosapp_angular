/*
    Modelo de dados para a consulta de produtos
*/
export class ProdutosGetModel {
  id: string = '';
  nome: string = '';
  descricao: string = '';
  preco: number = 0;
  quantidade: number = 0;
  total: number = 0;
  dataCriacao: Date | null = null;
  dataUltimaAlteracao: Date | null = null;
}
