import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
        // --- ALTERAÇÃO AQUI ---
        const idSalvo = localStorage.getItem('usuarioId');
        if (!idSalvo) {
          navigate('/')
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
    <div className="space-y-8 pb-12">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">
            Bem-vindo, {usuario?.nome.split(' ')[0]} 👋
          </h1>
          <p className="text-gray-400">
            Sua jornada de evolução continua. Você tem <span className="text-primary font-bold">novas missões</span> disponíveis.
          </p>
        </div>
        
        <div className="flex items-center gap-3 bg-surface px-5 py-2 rounded-full border border-gray-800">
            <Flame className="text-orange-500 fill-orange-500" size={20} />
            <span className="font-bold text-white">5 dias</span>
            <span className="text-sm text-gray-500">de ofensiva</span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2 space-y-8">
          <EmojiRating />

          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-3 text-white">
                <Target className="text-primary" /> Para Você
              </h2>
              <button className="text-primary hover:text-indigo-400 font-medium text-sm transition-colors">
                Ver todas
              </button>
            </div>
            
            {trilhas.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {trilhas.map(trilha => (
                  <TrilhaCard key={trilha.id} trilha={trilha} />
                ))}
              </div>
            ) : (
              <div className="p-8 bg-surface rounded-3xl border border-gray-800 text-center text-gray-500">
                Nenhuma trilha recomendada no momento. Responda o questionário novamente!
              </div>
            )}
          </section>
        </div>
        <aside className="space-y-8">
          <div className="bg-gradient-to-br from-primary/20 to-purple-600/10 p-8 rounded-3xl border border-primary/30 relative overflow-hidden">
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(79,70,229,0.3)]">
                 <Trophy size={40} className="text-yellow-400 fill-yellow-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">Nível 5</h3>
              <p className="text-primary font-mono font-bold text-lg mb-6">{usuario?.pontosXp} XP</p>
              
              <div className="w-full bg-black/40 rounded-full h-3 mb-2 overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-purple-500 h-3 rounded-full w-[70%]"></div>
              </div>
              <p className="text-xs text-gray-400">Faltam 450 XP para o próximo nível</p>
            </div>
          </div>

          <div className="bg-surface p-6 rounded-3xl border border-gray-800">
            <h3 className="font-bold text-white mb-6 text-lg">Leaderboard (Top 3)</h3>
            <ul className="space-y-4">
              {[1, 2, 3].map((pos) => (
                <li key={pos} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={clsx(
                      "w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm",
                      pos === 1 ? "bg-yellow-500/20 text-yellow-500" : 
                      pos === 2 ? "bg-gray-400/20 text-gray-400" : "bg-orange-700/20 text-orange-600"
                    )}>
                      {pos}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Dev Master {pos}</p>
                      <p className="text-xs text-gray-500">Fullstack</p>
                    </div>
                  </div>
                  <span className="text-sm font-mono text-primary font-bold">{12000 - (pos * 1500)} XP</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

      </div>
    </div>
  );
}