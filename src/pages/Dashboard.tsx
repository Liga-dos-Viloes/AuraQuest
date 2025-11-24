import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import { EmojiRating } from '../components/Emoji';
import { TrilhaCard } from '../components/TrilhaCard';
import type { Usuario } from '../types/usuario';
import type { Trilha } from '../types/trilhas';
import { Trophy, Flame, Target, Loader2, Lock, Crown, X } from 'lucide-react';
import clsx from 'clsx';

export function Dashboard() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [trilhas, setTrilhas] = useState<Trilha[]>([]);
  const [usersLeaderboard, setUsersLeaderboard] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(true);

  const [missoesHoje, setMissoesHoje] = useState(0);
  const [showPaywall, setShowPaywall] = useState(false);
  const LIMITE_FREE = 3;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const idSalvo = localStorage.getItem('usuarioId');
        if (!idSalvo) {
          navigate('/');
          return;
        }

        const [userRes, trilhasRes, allUsersRes] = await Promise.all([
          api.get<Usuario>(`/usuarios/${idSalvo}`),
          api.get<Trilha[]>('/trilhas'),
          api.get<Usuario[]>('/usuarios')
        ]);

        setUsuario(userRes.data);

        const uniqueTrilhas = trilhasRes.data.filter((trilha, index, self) =>
          index === self.findIndex((t) => t.id === trilha.id)
        );
        setTrilhas(uniqueTrilhas);

        const uniqueUsers = allUsersRes.data.filter((user, index, self) =>
          index === self.findIndex((u) => u.id === user.id)
        );

        const ranking = uniqueUsers
          .sort((a, b) => b.pontosXp - a.pontosXp)
          .slice(0, 5);
        setUsersLeaderboard(ranking);

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

  const handleMissaoConcluida = (pontosGanhos: number) => {
    if (missoesHoje >= LIMITE_FREE) {
      setShowPaywall(true);
      return;
    }

    setMissoesHoje(prev => prev + 1);

    if (usuario) {
      setUsuario({ ...usuario, pontosXp: usuario.pontosXp + pontosGanhos });
    }
  };

  if (loading) {
    return (
      <div className="h-[50vh] flex items-center justify-center">
        <Loader2 className="animate-spin text-primary" size={48} />
      </div>
    );
  }

  return (
    <div className="space-y-12 pb-20 relative">

      {showPaywall && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0a0b14]/95 backdrop-blur-md animate-in fade-in duration-300 w-screen h-screen overflow-hidden">
          <div className="bg-surface border border-primary/50 p-8 rounded-3xl max-w-lg w-full text-center relative overflow-hidden shadow-2xl shadow-purple-500/20">
            <button
              onClick={() => setShowPaywall(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-50"
            >
              <X size={24} />
            </button>

            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-purple-500 to-primary"></div>

            <div className="mb-6 mt-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400 blur-xl opacity-20 rounded-full"></div>
                <Crown size={64} className="text-yellow-400 relative z-10 drop-shadow-lg" />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-2">Wow! Você está on fire! 🔥</h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Você atingiu o limite diário de <span className="font-bold text-foreground bg-foreground/10 px-2 py-0.5 rounded">{LIMITE_FREE} missões</span> do plano gratuito. <br />
              Para continuar evoluindo sem limites, torne-se <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 font-bold">Premium</span>!
            </p>

            <div className="grid gap-4">
              <button
                onClick={() => navigate('/premium')}
                className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white font-bold py-4 rounded-xl text-lg transition-all shadow-xl shadow-primary/20 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Lock size={20} /> Assinar Premium (R$ 19,90/mês)
              </button>
              <button
                onClick={() => setShowPaywall(false)}
                className="text-muted-foreground hover:text-foreground text-sm underline decoration-gray-700 underline-offset-4 hover:decoration-foreground transition-all"
              >
                Voltar amanhã (Fechar)
              </button>
            </div>
          </div>
        </div>
      )}


      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-border pb-8">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Bem-vindo, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{usuario?.nome.split(' ')[0]}</span> 👋
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Você completou <span className="text-primary font-bold">{missoesHoje}/{LIMITE_FREE}</span> missões gratuitas hoje.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-surface/50 px-6 py-3 rounded-2xl border border-border shadow-lg backdrop-blur-sm">
          <Flame className="text-orange-500 fill-orange-500 animate-pulse" size={24} />
          <div className="flex flex-col">
            <span className="font-bold text-foreground leading-none">5 dias</span>
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Ofensiva</span>
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
                <h2 className="text-2xl font-bold flex items-center gap-3 text-foreground mb-1">
                  <Target className="text-primary" /> Trilhas Disponíveis
                </h2>
                <p className="text-muted-foreground text-sm">Complete para ganhar +100 XP</p>
              </div>
            </div>

            {trilhas.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {trilhas.map((trilha) => (
                  <TrilhaCard
                    key={trilha.id}
                    trilha={trilha}
                    onComplete={handleMissaoConcluida}
                    bloqueado={missoesHoje >= LIMITE_FREE}
                  />
                ))}
              </div>
            ) : (
              <div className="p-12 bg-surface rounded-3xl border border-border text-center text-muted-foreground border-dashed">
                <p className="text-lg">Nenhuma trilha encontrada.</p>
                <p className="mt-2">Tente novamente mais tarde.</p>
              </div>
            )}
          </section>
        </div>

        <aside className="space-y-8">
          <div className="bg-gradient-to-br from-primary/20 via-purple-900/20 to-background p-8 rounded-3xl border border-primary/30 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-32 bg-primary/10 blur-3xl rounded-full -mr-16 -mt-16"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-surface/50 rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(79,70,229,0.2)] border border-white/10 transition-transform hover:scale-110 cursor-pointer">
                <Trophy size={48} className="text-yellow-400 fill-yellow-400 drop-shadow-lg" />
              </div>
              <span className="text-sm font-bold text-primary tracking-widest uppercase mb-2">Nível Atual</span>
              <h3 className="text-4xl font-black text-foreground mb-2">Level {Math.floor((usuario?.pontosXp || 0) / 1000) + 1}</h3>
              <p className="text-muted-foreground font-mono text-xl mb-8 bg-black/30 px-4 py-1 rounded-lg border border-white/5">
                {usuario?.pontosXp} XP
              </p>

              <div className="w-full bg-black/40 rounded-full h-4 mb-3 overflow-hidden border border-white/5">
                <div
                  className="bg-gradient-to-r from-primary to-purple-500 h-full rounded-full shadow-[0_0_15px_rgba(79,70,229,0.5)] transition-all duration-1000"
                  style={{ width: `${((usuario?.pontosXp || 0) % 1000) / 10}%` }}
                ></div>
              </div>
              <p className="text-xs text-muted-foreground font-medium">Próximo nível em {1000 - ((usuario?.pontosXp || 0) % 1000)} XP</p>
            </div>
          </div>

          <div className="bg-surface p-8 rounded-3xl border border-border shadow-xl">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-bold text-foreground text-xl">Ranking Global</h3>
              <span className="text-xs bg-foreground/5 px-2 py-1 rounded text-muted-foreground border border-foreground/5">Top 5</span>
            </div>

            <ul className="space-y-4">
              {usersLeaderboard.map((user, index) => {
                const pos = index + 1;
                const isMe = user.id === usuario?.id;
                return (
                  <li
                    key={user.id}
                    className={clsx(
                      "flex items-center justify-between p-3 rounded-xl transition-all border border-transparent",
                      isMe ? "bg-foreground/5 border-primary/30 scale-105 shadow-lg" : "hover:bg-foreground/5"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div className={clsx(
                        "w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shadow-inner",
                        pos === 1 ? "bg-yellow-400 text-black" :
                          pos === 2 ? "bg-gray-300 text-black" :
                            pos === 3 ? "bg-orange-400 text-black" :
                              "bg-gray-800 text-gray-400"
                      )}>
                        {pos}
                      </div>
                      <div>
                        <p className={clsx("font-bold text-sm", isMe ? "text-foreground" : "text-muted-foreground")}>
                          {user.nome.split(' ')[0]} {isMe && <span className="text-xs text-primary ml-1">(Você)</span>}
                        </p>
                        <p className="text-[10px] text-muted-foreground uppercase">Dev</p>
                      </div>
                    </div>
                    <span className="text-sm font-mono font-bold text-primary">
                      {user.pontosXp} XP
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

      </div>
    </div>
  );
}