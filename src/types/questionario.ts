
export interface Opcao {
  id: number;
  textoOpcao: string;
}

export interface Pergunta {
  id: number;
  texto: string;
  tipoSelecao: 'SINGLE' | 'MULTIPLE';
  opcoes: Opcao[];
}