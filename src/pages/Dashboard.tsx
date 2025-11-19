import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../api/api';
import { EmojiRating } from '../components/Emoji';
import { TrilhaCard } from '../components/TrilhaCard';
import type { Usuario } from '../types/usuario';
import type { Trilha } from '../types/trilhas';
import { Trophy, Flame, Target, Loader2 } from 'lucide-react';
import clsx from 'clsx';

export function Dashboard() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [trilhas, setTrilhas] = useState<Trilha[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const idSalvo = localStorage.getItem('usuarioId');
        if (!idSalvo) {
          navigate('/');
          return;
        }

        const [userRes, trilhasRes] = await Promise.all([
          api.get<Usuario>(`/usuarios/${idSalvo}`),
          api.get<Trilha[]>('/trilhas') 
        ]);
        
        setUsuario(userRes.data);
        setTrilhas(trilhasRes.data);
      } catch (error) {
        console.error("Erro ao carregar dashboard", error);
        localStorage.removeItem('usuarioId');
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  if (loading) {
    return (
      <div className="h-[50vh] flex items-center justify-center">
        <Loader2 className="animate-spin text-primary" size={48} />
      </div>
    );
  }

  return (
    <div className="space-y-12 pb-20"> 
      
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-gray-800/50 pb-8">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Bem-vindo, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{usuario?.nome.split(' ')[0]}</span> 👋
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            Sua jornada de evolução continua. Você tem <span className="text-primary font-bold">novas missões</span> disponíveis para hoje.
          </p>
        </div>
        
        <div className="flex items-center gap-3 bg-surface/50 px-6 py-3 rounded-2xl border border-gray-700 shadow-lg backdrop-blur-sm">
            <Flame className="text-orange-500 fill-orange-500 animate-pulse" size={24} />
            <div className="flex flex-col">
              <span className="font-bold text-white leading-none">5 dias</span>
              <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">Ofensiva</span>
            </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

        <div className="lg:col-span-2 space-y-12">
          
          <section>
             <EmojiRating />
          </section>

          <section>
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-2xl font-bold flex items-center gap-3 text-white mb-1">
                  <Target className="text-primary" /> Trilhas Disponíveis
                </h2>
                <p className="text-gray-500 text-sm">Focadas no seu desenvolvimento</p>
              </div>
              
              <button className="text-primary hover:text-indigo-400 font-medium text-sm transition-colors hover:underline decoration-2 underline-offset-4">
                Ver todas as trilhas
              </button>
            </div>
            
            {trilhas.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> 
                {trilhas.map(trilha => (
                  <TrilhaCard key={trilha.id} trilha={trilha} />
                ))}
              </div>
            ) : (
              <div className="p-12 bg-surface rounded-3xl border border-gray-800 text-center text-gray-500 border-dashed">
                <p className="text-lg">Nenhuma trilha encontrada no momento.</p>
                <p className="mt-2">
                  <Link to="/questionario" className="text-primary hover:text-white transition-colors font-bold">
                    Refazer o Questionário
                  </Link>
                </p>
              </div>
            )}
          </section>
        </div>

        <aside className="space-y-8">
          <div className="bg-gradient-to-br from-primary/20 via-purple-900/20 to-background p-8 rounded-3xl border border-primary/30 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-32 bg-primary/10 blur-3xl rounded-full -mr-16 -mt-16"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-surface/50 rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(79,70,229,0.2)] border border-white/10">
                 <Trophy size={48} className="text-yellow-400 fill-yellow-400 drop-shadow-lg" />
              </div>
              <span className="text-sm font-bold text-primary tracking-widest uppercase mb-2">Nível Atual</span>
              <h3 className="text-4xl font-black text-white mb-2">Level 5</h3>
              <p className="text-gray-300 font-mono text-xl mb-8 bg-black/30 px-4 py-1 rounded-lg border border-white/5">
                {usuario?.pontosXp} XP
              </p>
              
              <div className="w-full bg-black/40 rounded-full h-4 mb-3 overflow-hidden border border-white/5">
                <div className="bg-gradient-to-r from-primary to-purple-500 h-full rounded-full w-[70%] shadow-[0_0_15px_rgba(79,70,229,0.5)]"></div>
              </div>
              <p className="text-xs text-gray-500 font-medium">Faltam 450 XP para o próximo nível</p>
            </div>
          </div>

          <div className="bg-surface p-8 rounded-3xl border border-gray-800 shadow-xl">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-bold text-white text-xl">Top Ranking</h3>
              <span className="text-xs bg-white/5 px-2 py-1 rounded text-gray-400">Semanal</span>
            </div>
            
            <ul className="space-y-6">
              {[1, 2, 3].map((pos) => (
                <li key={pos} className="flex items-center justify-between group cursor-default">
                  <div className="flex items-center gap-5">
                    <div className={clsx(
                      "w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg transition-transform group-hover:scale-110 shadow-lg",
                      pos === 1 ? "bg-gradient-to-br from-yellow-400 to-yellow-600 text-black" : 
                      pos === 2 ? "bg-gradient-to-br from-gray-300 to-gray-500 text-black" : 
                                  "bg-gradient-to-br from-orange-400 to-orange-700 text-black"
                    )}>
                      {pos}
                    </div>
                    <div>
                      <p className="font-bold text-white group-hover:text-primary transition-colors">Dev Master {pos}</p>
                      <p className="text-xs text-gray-500">Fullstack Developer</p>
                    </div>
                  </div>
                  <span className="text-sm font-mono text-gray-300 font-bold bg-black/30 px-3 py-1 rounded-lg border border-white/5">
                    {12000 - (pos * 1500)}
                  </span>
                </li>
              ))}
            </ul>
            
            <button className="w-full mt-8 py-3 text-sm font-medium text-gray-400 hover:text-white border border-gray-800 hover:border-gray-600 rounded-xl transition-all">
              Ver Ranking Completo
            </button>
          </div>
        </aside>

      </div>
    </div>
  );
}