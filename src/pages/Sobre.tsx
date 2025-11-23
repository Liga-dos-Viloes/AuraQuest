import { Target, Heart, Trophy, Rocket, Lightbulb, Shield, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Sobre() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 pt-10 px-4 flex flex-col items-center relative overflow-hidden">
      
      {/* Efeitos de Fundo (Blobs) - Mantendo consistência visual */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center">
        
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-24 max-w-4xl">
          <div className="inline-flex items-center justify-center p-4 bg-surface/50 backdrop-blur-sm rounded-full border border-white/10 shadow-xl mb-4 animate-in zoom-in duration-500">
            <Rocket size={40} className="text-primary" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight">
            O Futuro do <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-500">
              Desenvolvimento Humano
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            O <strong className="text-white">AuraQuest</strong> é uma plataforma inovadora que une a evolução técnica (Upskilling) com o cuidado mental. Transformamos sua jornada profissional em uma experiência gamificada única.
          </p>
        </div>

        {/* Grid de Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-24">
          <CardPilar 
            icon={<Target size={40} className="text-blue-400" />}
            titulo="Upskilling"
            descricao="Trilhas de aprendizado adaptativas focadas em tecnologias emergentes para manter sua carreira sempre à frente."
            delay="delay-0"
          />
          <CardPilar 
            icon={<Heart size={40} className="text-pink-500" />}
            titulo="Bem-Estar"
            descricao="Monitoramento diário de humor e missões de saúde mental para garantir o equilíbrio entre código e vida."
            delay="delay-100"
          />
          <CardPilar 
            icon={<Trophy size={40} className="text-yellow-400" />}
            titulo="Gamificação"
            descricao="Sistema de XP, níveis e conquistas que torna a rotina de estudos viciante e recompensadora."
            delay="delay-200"
          />
        </div>

        {/* Seção de Missão/Propósito */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-surface/40 backdrop-blur-md border border-white/5 p-8 md:p-16 rounded-[2.5rem] shadow-2xl">
            <div className="space-y-8">
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-yellow-500/10 rounded-xl">
                        <Lightbulb className="text-yellow-400" size={28} />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Nosso Propósito</h3>
                </div>
                
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                    <p>
                        Em um cenário corporativo acelerado, o <span className="text-white font-semibold">burnout</span> e a <span className="text-white font-semibold">estagnação profissional</span> são riscos reais.
                    </p>
                    <p>
                        Nossa missão é democratizar o acesso ao autodesenvolvimento sustentável, criando um ecossistema onde a <strong>evolução na carreira</strong> caminha junto com a <strong>saúde mental</strong>.
                    </p>
                </div>

                <div className="pt-4">
                    <button 
                        onClick={() => navigate('/login')}
                        className="px-8 py-4 bg-primary hover:bg-indigo-600 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary/25 hover:-translate-y-1 flex items-center gap-2 group"
                    >
                        Começar Jornada <Shield size={20} className="group-hover:text-yellow-400 transition-colors" />
                    </button>
                </div>
            </div>

            {/* Elemento Visual Abstrato */}
            <div className="relative h-[400px] rounded-3xl overflow-hidden border border-gray-700 bg-gradient-to-br from-[#1a1c2e] to-[#0f1016] flex items-center justify-center group">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                
                {/* Orb animado central */}
                <div className="absolute w-48 h-48 bg-primary/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000"></div>
                <div className="absolute w-32 h-32 bg-purple-500/20 rounded-full blur-2xl translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000"></div>

                <div className="relative z-10 text-center space-y-4 p-8 bg-surface/30 backdrop-blur-sm rounded-2xl border border-white/5">
                    <Sparkles className="mx-auto text-yellow-400 mb-2" size={32} />
                    <h4 className="text-2xl font-bold text-white">Tecnologia & Saúde</h4>
                    <div className="h-px w-16 bg-primary mx-auto"></div>
                    <p className="text-gray-400 font-mono text-sm">FIAP © 2025</p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}

// Componente auxiliar para os Cards
function CardPilar({ icon, titulo, descricao, delay }: { icon: React.ReactNode, titulo: string, descricao: string, delay: string }) {
  return (
    <div className={`bg-surface/60 backdrop-blur-sm border border-gray-800 p-8 rounded-3xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards ${delay}`}>
      <div className="w-16 h-16 bg-black/30 rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-white/5 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{titulo}</h3>
      <p className="text-gray-400 leading-relaxed">
        {descricao}
      </p>
    </div>
  );
}