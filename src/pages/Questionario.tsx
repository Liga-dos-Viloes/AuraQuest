import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import type { Pergunta } from '../types/questionario';
import {
  ArrowRight,
  Check,
  Loader2,
  Brain,
  Code2,
  Database,
  Leaf,
  Monitor,
  Zap
} from 'lucide-react';
import clsx from 'clsx';

export function Questionario() {
  const navigate = useNavigate();
  const [perguntas, setPerguntas] = useState<Pergunta[]>([]);
  const [respostas, setRespostas] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [enviando, setEnviando] = useState(false);

  useEffect(() => {
    api.get<Pergunta[]>('/questionario')
      .then(response => {
        const uniqueQuestions = response.data.filter((q, index, self) =>
          index === self.findIndex(t => t.id === q.id)
        );
        setPerguntas(uniqueQuestions);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const getIconForOption = (text: string) => {
    const t = text.toLowerCase();
    if (t.includes('inteligência') || t.includes('ia')) return <Brain size={40} className="text-purple-400" />;
    if (t.includes('back-end') || t.includes('java')) return <Database size={40} className="text-blue-400" />;
    if (t.includes('front-end') || t.includes('react')) return <Monitor size={40} className="text-cyan-400" />;
    if (t.includes('sustentabilidade') || t.includes('green')) return <Leaf size={40} className="text-green-400" />;
    if (t.includes('soft') || t.includes('comunicação')) return <Zap size={40} className="text-yellow-400" />;
    return <Code2 size={40} className="text-muted-foreground" />;
  };

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
      const idSalvo = localStorage.getItem('usuarioId');

      if (!idSalvo) {
        navigate('/');
        return;
      }

      await api.post('/questionario/respostas', {
        idUsuario: parseInt(idSalvo),
        idsOpcoes: respostas
      });

      navigate('/dashboard');
    } catch (error) {
      console.error(error);
    } finally {
      setEnviando(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <Loader2 className="animate-spin text-primary" size={64} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-6 flex flex-col items-center">

      <div className="max-w-6xl w-full space-y-12 pt-10 pb-40"> {/* Adicionado pb-40 para o conteúdo não ficar escondido atrás da barra */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight">
            Escolha seu <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
              Próximo Nível
            </span>
          </h1>
        </div>

        <div className="space-y-16">
          {perguntas.map((pergunta) => {

            const uniqueOpcoes = pergunta.opcoes.filter((op, index, self) =>
              index === self.findIndex((t) => t.id === op.id || t.textoOpcao === op.textoOpcao)
            );

            return (
              <div key={pergunta.id} className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center">
                  {pergunta.texto}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {uniqueOpcoes.map((opcao) => {
                    const selecionado = respostas.includes(opcao.id);
                    return (
                      <button
                        key={opcao.id}
                        onClick={() => toggleOpcao(opcao.id, pergunta.tipoSelecao)}
                        className={clsx(
                          "relative h-64 rounded-[2rem] border-2 transition-all duration-300 flex flex-col items-center justify-center gap-6 p-6 group hover:-translate-y-2",
                          selecionado
                            ? "bg-surface border-primary shadow-[0_0_40px_rgba(79,70,229,0.3)]"
                            : "bg-surface/30 border-transparent hover:border-border hover:bg-surface"
                        )}
                      >
                        <div className={clsx(
                          "p-6 rounded-full bg-black/40 transition-transform duration-300",
                          selecionado ? "scale-110 ring-2 ring-primary ring-offset-4 ring-offset-black" : "group-hover:scale-110"
                        )}>
                          {getIconForOption(opcao.textoOpcao)}
                        </div>

                        <span className={clsx(
                          "font-bold text-xl text-center max-w-[80%]",
                          selecionado ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                        )}>
                          {opcao.textoOpcao}
                        </span>

                        {selecionado && (
                          <div className="absolute top-4 right-4 bg-primary text-white p-1.5 rounded-full shadow-lg animate-in zoom-in">
                            <Check size={20} strokeWidth={3} />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-background/80 backdrop-blur-xl border-t border-border p-6 z-50 flex justify-center shadow-2xl">
        <div className="flex flex-col items-center gap-3 w-full max-w-md">
          <button
            onClick={handleSubmit}
            disabled={respostas.length === 0 || enviando}
            className={clsx(
              "w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-lg",
              respostas.length > 0
                ? "bg-foreground text-background hover:scale-[1.02] hover:shadow-foreground/20"
                : "bg-muted text-muted-foreground cursor-not-allowed"
            )}
          >
            {enviando ? <Loader2 className="animate-spin" /> : <>Continuar <ArrowRight strokeWidth={3} /></>}
          </button>

          <button onClick={() => navigate('/dashboard')} className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors py-2">
            Pular esta etapa
          </button>
        </div>
      </div>

    </div>
  );
}