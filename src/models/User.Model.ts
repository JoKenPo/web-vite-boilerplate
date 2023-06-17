
export interface ILoggedUser {
  id: number;
  nome: String;
  departamento: String;
  id_permissao: number;
  roles: Array<string>,
  cliente: {
      id: number
  }
}