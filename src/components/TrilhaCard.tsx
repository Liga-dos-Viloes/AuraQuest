import { ArrowRight, Zap, Heart } from 'lucide-react';
import clsx from 'clsx';
import type { Trilha } from '../types/trilhas';

interface TrilhaCardProps {
  trilha: Trilha;
}

export function TrilhaCard({ trilha }: TrilhaCardProps) {
  const isBemEstar = trilha.tipo === 'Bem-Estar';

  return (
    <div className="bg-surface p-6 rounded-3xl border border-gray-800 flex flex-col justify-between hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 h-full group">
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
        
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
          {trilha.titulo}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed">
          {trilha.descricao}
        </p>
      </div>

      <button className="mt-8 w-full bg-white/5 text-white hover:bg-primary font-semibold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-primary/20">
        Iniciar Quest <ArrowRight size={18} />
      </button>
    </div>
  );
}