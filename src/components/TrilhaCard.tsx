import { useState } from 'react';
import { ArrowRight, Zap, Heart, CheckCircle, Loader2 } from 'lucide-react';
import clsx from 'clsx';
import type { Trilha } from '../types/trilhas';
import api from '../api/api';

interface TrilhaCardProps {
  trilha: Trilha;
  onComplete: (pontos: number) => void;
  bloqueado?: boolean;
}

export function TrilhaCard({ trilha, onComplete, bloqueado = false }: TrilhaCardProps) {
  const isBemEstar = trilha.tipo === 'Bem-Estar';
  const [status, setStatus] = useState<'INICIAR' | 'EM_ANDAMENTO' | 'CONCLUIDO'>('INICIAR');
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (bloqueado && status === 'EM_ANDAMENTO') {
      onComplete(0);
      return;
    }

    if (status === 'INICIAR') {
      setStatus('EM_ANDAMENTO');
    } else if (status === 'EM_ANDAMENTO') {
      setLoading(true);
      try {
        const idUsuario = localStorage.getItem('usuarioId');
        await api.put(`/usuarios/${idUsuario}/xp`, { pontos: 100 });

        setStatus('CONCLUIDO');
        onComplete(100);
      } catch (error) {
        console.error("Erro ao concluir missão", error);
        setStatus('CONCLUIDO');
        onComplete(100);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className={clsx(
      "bg-surface p-6 rounded-3xl border flex flex-col justify-between transition-all duration-300 h-full group relative overflow-hidden",
      (bloqueado && status === 'EM_ANDAMENTO') ? "border-red-500/30" : "border-border hover:border-primary/50 hover:-translate-y-1"
    )}>


      <div>
        <div className="flex justify-between items-start mb-6">
          <span className={clsx(
            "text-xs font-bold px-3 py-1 rounded-full border",
            isBemEstar
              ? "bg-green-500/10 text-green-400 border-green-500/20"
              : "bg-purple-500/10 text-purple-400 border-purple-500/20"
          )}>
            {trilha.tipo.toUpperCase()}
          </span>
          {isBemEstar ? <Heart size={24} className="text-green-400" /> : <Zap size={24} className="text-purple-400" />}
        </div>

        <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
          {trilha.titulo}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
          {trilha.descricao}
        </p>
      </div>

      <button
        onClick={handleClick}
        disabled={status === 'CONCLUIDO' || loading}
        className={clsx(
          "mt-8 w-full font-semibold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2",
          status === 'CONCLUIDO'
            ? "bg-green-500/20 text-green-400 cursor-default"
            : status === 'EM_ANDAMENTO'
              ? (bloqueado ? "bg-red-500/20 text-red-400 hover:bg-red-500/30" : "bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30")
              : "bg-foreground/5 text-foreground hover:bg-primary hover:text-white"
        )}
      >
        {loading ? <Loader2 className="animate-spin" /> : (
          <>
            {status === 'INICIAR' && <>Iniciar Quest <ArrowRight size={18} /></>}

            {status === 'EM_ANDAMENTO' && (
              bloqueado ? <>Bloqueado (Clique) <CheckCircle size={18} /></> : <>Concluir (+100 XP)</>
            )}

            {status === 'CONCLUIDO' && <>Concluída <CheckCircle size={18} /></>}
          </>
        )}
      </button>
    </div>
  );
}