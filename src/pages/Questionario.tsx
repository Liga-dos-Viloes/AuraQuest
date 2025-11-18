import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import type { Pergunta } from '../types/questionario';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import clsx from 'clsx';

export function Questionario() {
  const navigate = useNavigate();
  const [perguntas, setPerguntas] = useState<Pergunta[]>([]);
  const [respostas, setRespostas] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [enviando, setEnviando] = useState(false);

  useEffect(() => {
    api.get<Pergunta[]>('/questionario')
      .then(response => setPerguntas(response.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const toggleOpcao = (idOpcao: number, tipoSelecao: 'SINGLE' | 'MULTIPLE') => {
    setRespostas(prev => {
      const jaSelecionado = prev.includes(idOpcao);

      if (tipoSelecao === 'SINGLE') {
        return [idOpcao];
      } else {
        return jaSelecionado 
          ? prev.filter(id => id !== idOpcao) 
          : [...prev, idOpcao];
      }
    });
  };

  const handleSubmit = async () => {
    if (respostas.length === 0) return;
    setEnviando(true);
    
    try {
      // --- ALTERAÇÃO AQUI ---
      // Pega o ID que foi salvo no Login
      const idSalvo = localStorage.getItem('usuarioId');
      
      if (!idSalvo) {
        alert("Sessão expirada. Faça o login novamente.");
        navigate('/'); // Manda de volta pro login
        return;
      }
      
      const idUsuario = parseInt(idSalvo); // Converte de string para número

      await api.post('/questionario/respostas', {
        idUsuario: idUsuario, // Usa o ID dinâmico
        idsOpcoes: respostas
      });

      navigate('/dashboard');
    } catch (error) {
      console.error(error);
      alert("Erro ao salvar. Tente novamente.");
    } finally {
      setEnviando(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-white">
        <Loader2 className="animate-spin text-primary" size={48} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-white p-6 md:p-12 flex flex-col items-center">
      
      <div className="max-w-5xl w-full space-y-16">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Quais skills <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              você quer "upar"?
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Responda este questionário para que possamos identificar melhor o que deseja subir de lvl!
          </p>
        </div>

        <div className="space-y-12">
          {perguntas.map((pergunta) => (
            <div key={pergunta.id} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pergunta.opcoes.map((opcao) => {
                  const selecionado = respostas.includes(opcao.id);
                  return (
                    <button
                      key={opcao.id}
                      onClick={() => toggleOpcao(opcao.id, pergunta.tipoSelecao)}
                      className={clsx(
                        "group relative p-10 rounded-3xl border-2 text-left transition-all duration-300 flex items-center justify-between hover:scale-[1.02]",
                        selecionado 
                          ? "bg-primary/10 border-primary shadow-[0_0_30px_rgba(79,70,229,0.3)]" 
                          : "bg-surface border-gray-800 hover:border-gray-600 hover:bg-gray-800"
                      )}
                    >
                      <span className={clsx("font-bold text-2xl", selecionado ? "text-white" : "text-gray-400 group-hover:text-white")}>
                        {opcao.textoOpcao}
                      </span>
                      
                      <div className={clsx(
                        "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                        selecionado ? "bg-primary scale-110" : "bg-gray-800 group-hover:bg-gray-700"
                      )}>
                        {selecionado && <Check size={20} className="text-white" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-6 pt-12">
          <button
            onClick={handleSubmit}
            disabled={respostas.length === 0 || enviando}
            className={clsx(
              "w-full md:w-auto px-16 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-4 transition-all",
              respostas.length > 0 
                ? "bg-primary hover:bg-indigo-600 text-white shadow-xl hover:scale-105 hover:shadow-primary/40" 
                : "bg-gray-800 text-gray-500 cursor-not-allowed"
            )}
          >
            {enviando ? <Loader2 className="animate-spin" /> : <>Confirmar Seleção <ArrowRight size={24} /></>}
          </button>
          
          <button onClick={() => navigate('/dashboard')} className="text-gray-500 hover:text-white text-base font-medium underline decoration-gray-700 underline-offset-8 transition-colors">
            Quero escolher sozinho (Pular)
          </button>
        </div>

      </div>
    </div>
  );
}