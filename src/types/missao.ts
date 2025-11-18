import type { Usuario } from './usuario';
import type { Trilha } from './trilhas';

export interface Missao {
  id: number;
  progresso: number;
  status: 'EM_PROGRESSO' | 'COMPLETA';
  dataInicio: string;
  usuario: Usuario;
  trilha: Trilha;
}