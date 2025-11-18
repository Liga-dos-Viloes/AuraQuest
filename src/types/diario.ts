import type { Usuario } from './usuario';

export interface DiarioBemEstar {
  id: number;
  dataLog: string;
  sentimento: 1 | 2 | 3 | 4;
  feedback: string;
  usuario: Usuario;
}