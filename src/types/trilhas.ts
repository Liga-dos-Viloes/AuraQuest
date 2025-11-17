export interface Trilha {
  id: number;
  titulo: string;
  descricao: string;
  tipo: 'Upskilling' | 'Bem-Estar';
  skillTag: string | null;
}