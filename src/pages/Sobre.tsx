import { Target, Heart, Trophy, Rocket, Users, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Sobre() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-background text-white p-6 md:p-12 flex flex-col items-center">

            {/* Seção Hero */}
            <div className="max-w-5xl w-full space-y-8 text-center mb-20">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    O Futuro do <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                        Desenvolvimento Humano
                    </span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    O <strong className="text-white">AuraQuest</strong> nasceu para o desafio da <span className="text-primary font-bold">Global Solution</span>.
                    Unimos a evolução de carreira com o bem-estar mental em uma jornada gamificada única.
                </p>
            </div>

            {/* Grid de Pilares */}
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                <CardPilar
                    icon={<Target size={40} className="text-blue-400" />}
                    titulo="Requalificação"
                    descricao="Trilhas de aprendizado adaptativas (Upskilling) para manter suas habilidades sempre relevantes no mercado."
                />
                <CardPilar
                    icon={<Heart size={40} className="text-pink-500" />}
                    titulo="Bem-estar"
                    descricao="Monitoramento de saúde mental e missões diárias para garantir o equilíbrio entre vida e trabalho."
                />
                <CardPilar
                    icon={<Trophy size={40} className="text-yellow-400" />}
                    titulo="Gamificação"
                    descricao="Ganhe XP, suba de nível e desbloqueie conquistas reais enquanto evolui profissionalmente."
                />
            </div>

            {/* Seção de Missão/Objetivo */}
            <div className="w-full bg-surface rounded-3xl p-8 md:p-16 mb-20 border border-gray-800 shadow-2xl">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Nossa Missão
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Em um mundo corporativo cada vez mais acelerado, o burnout e a obsolescência profissional são riscos reais. O AuraQuest combate esses problemas transformando a rotina em uma aventura RPG.
                        </p>

                        <ul className="space-y-4 mt-4">
                            <ItemLista text="Combate ao Burnout com monitoramento contínuo" />
                            <ItemLista text="Engajamento real através de recompensas" />
                            <ItemLista text="Cultura de aprendizado contínuo (Lifelong Learning)" />
                        </ul>

                        <button
                            onClick={() => navigate('/login')}
                            className="mt-8 px-8 py-4 bg-primary hover:bg-indigo-600 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary/25 hover:-translate-y-1 flex items-center gap-2"
                        >
                            Começar Jornada <Rocket size={20} />
                        </button>
                    </div>

                    {/* Ilustração Abstrata / Visual */}
                    <div className="relative h-full min-h-[300px] bg-gradient-to-br from-primary/20 to-purple-900/20 rounded-2xl border border-gray-700 flex items-center justify-center overflow-hidden group">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                        <div className="text-center p-6 relative z-10">
                            <Users size={64} className="mx-auto text-white mb-4 group-hover:scale-110 transition-transform duration-500" />
                            <h3 className="text-2xl font-bold">Feito por Estudantes</h3>
                            <p className="text-sm text-gray-400 mt-2">FIAP - Global Solution 2025</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

// Componentes Auxiliares para manter o código limpo

function CardPilar({ icon, titulo, descricao }: { icon: React.ReactNode, titulo: string, descricao: string }) {
    return (
        <div className="bg-surface p-8 rounded-3xl border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
            <div className="w-16 h-16 bg-black/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{titulo}</h3>
            <p className="text-gray-400 leading-relaxed">
                {descricao}
            </p>
        </div>
    );
}

function ItemLista({ text }: { text: string }) {
    return (
        <li className="flex items-center gap-3 text-gray-300">
            <CheckCircle2 className="text-primary shrink-0" size={20} />
            <span>{text}</span>
        </li>
    );
}