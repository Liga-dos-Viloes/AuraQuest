import { Frown, Meh, Smile, Laugh } from 'lucide-react';
import clsx from 'clsx';
import { useState } from 'react';
import api from '../api/api';

export function EmojiRating() {
  const [selected, setSelected] = useState<number | null>(null);
  const [enviado, setEnviado] = useState(false);

  const options = [
    { value: 1, icon: Frown, color: 'text-red-400', label: 'Mal' },
    { value: 2, icon: Meh, color: 'text-orange-400', label: 'Mais ou menos' },
    { value: 3, icon: Smile, color: 'text-yellow-400', label: 'Bem' },
    { value: 4, icon: Laugh, color: 'text-green-400', label: 'Muito Bem' },
  ];

  const handleSelect = async (valor: number) => {
    setSelected(valor);
    try {
      await api.post('/diarios', {
        idUsuario: 1,
        sentimento: valor,
        feedback: "Registro rápido via Dashboard"
      });
      setEnviado(true);
      setTimeout(() => setEnviado(false), 3000);
    } catch (error) {
      console.error("Erro ao salvar diário", error);
    }
  };

  return (
    <div className="bg-surface p-8 rounded-3xl border border-gray-800 relative overflow-hidden">
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-2 text-white">Diário de Bem-Estar</h3>
        <p className="text-gray-400 mb-8">Como você está se sentindo hoje? (Seu feedback é privado)</p>
        
        {enviado ? (
          <div className="bg-green-500/20 text-green-300 p-4 rounded-xl text-center font-medium animate-fade-in">
            ✨ Obrigado por compartilhar! Seu registro foi salvo.
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-4">
            {options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleSelect(opt.value)}
                className={clsx(
                  "flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-300 border-2 group",
                  selected === opt.value 
                    ? "bg-white/10 border-primary scale-105" 
                    : "bg-black/20 border-transparent hover:bg-white/5 hover:scale-110 hover:border-gray-700"
                )}
              >
                <opt.icon size={40} className={clsx("mb-2 transition-transform group-hover:-translate-y-1", opt.color)} />
                <span className="text-xs font-medium text-gray-500 group-hover:text-white transition-colors hidden md:block">{opt.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
      
      {/* Efeito de fundo decorativo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
    </div>
  );
}