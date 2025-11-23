import { Check, X, Crown, Zap, Shield, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Premium() {
  const navigate = useNavigate();

  const handleSubscribe = () => {
    alert("Redirecionando para o gateway de pagamento...");
    setTimeout(() => {
        alert("Pagamento aprovado! Bem-vindo ao Premium 🚀");
        navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen py-12 px-4 flex flex-col items-center justify-center bg-background relative overflow-hidden">
      
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-50"></div>
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[128px] pointer-events-none opacity-40"></div>

      <button 
        onClick={() => navigate('/dashboard')}
        className="absolute top-6 left-6 md:top-10 md:left-10 text-gray-400 hover:text-white flex items-center gap-2 transition-colors z-20 bg-surface/50 px-4 py-2 rounded-full border border-white/5 backdrop-blur-sm"
      >
        <ArrowLeft size={20} /> Voltar
      </button>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider border border-primary/20 shadow-[0_0_20px_rgba(79,70,229,0.2)]">
            Seja Lenda
          </span>
          
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight drop-shadow-2xl">
            Desbloqueie seu <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-500 py-2 inline-block">
              Potencial Máximo
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Acelere sua carreira com acesso ilimitado a todas as trilhas, mentoria de IA e certificado oficial reconhecido pelo mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl items-stretch">
          
          <div className="bg-surface/40 backdrop-blur-xl border border-white/5 p-8 rounded-[2rem] flex flex-col hover:border-white/10 transition-all duration-300">
              <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white">Explorador</h3>
                  <p className="text-gray-400">Para quem está começando</p>
                  <div className="mt-6 flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-white">R$ 0</span>
                      <span className="text-gray-500 text-xl">/mês</span>
                  </div>
              </div>
              
              <ul className="space-y-5 mb-10 flex-1">
                  <li className="flex items-center gap-3 text-gray-300 font-medium"><Check size={20} className="text-green-500 flex-shrink-0" /> 3 Missões por dia</li>
                  <li className="flex items-center gap-3 text-gray-300 font-medium"><Check size={20} className="text-green-500 flex-shrink-0" /> Acesso a trilhas básicas</li>
                  <li className="flex items-center gap-3 text-gray-300 font-medium"><Check size={20} className="text-green-500 flex-shrink-0" /> Registro de Humor</li>
                  <li className="flex items-center gap-3 text-gray-600/50"><X size={20} className="flex-shrink-0" /> Sem mentoria de IA</li>
                  <li className="flex items-center gap-3 text-gray-600/50"><X size={20} className="flex-shrink-0" /> Sem certificados</li>
              </ul>

              <button 
                  onClick={() => navigate('/dashboard')}
                  className="w-full py-4 rounded-xl font-bold bg-white/5 hover:bg-white/10 transition-all text-white border border-white/5"
              >
                  Continuar Grátis
              </button>
          </div>

          <div className="relative bg-black/40 backdrop-blur-xl border border-primary/50 p-8 rounded-[2rem] flex flex-col shadow-[0_0_60px_rgba(79,70,229,0.15)] transform md:-translate-y-6 z-10">
              
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-xl flex items-center gap-2 tracking-wide whitespace-nowrap ring-4 ring-background">
                  <Crown size={16} className="fill-yellow-400 text-yellow-400" /> RECOMENDADO
              </div>

              <div className="mb-8 pt-4">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                      Aura Master <Zap size={24} className="text-yellow-400 fill-yellow-400 drop-shadow-lg" />
                  </h3>
                  <p className="text-indigo-200/80">Evolução sem limites</p>
                  <div className="mt-6 flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-white">R$ 19,90</span>
                      <span className="text-gray-500 text-xl">/mês</span>
                  </div>
              </div>
              
              <ul className="space-y-5 mb-10 flex-1">
                  {[
                    { icon: Check, text: "Missões ILIMITADAS", bold: true },
                    { icon: Check, text: "Todas as trilhas liberadas" },
                    { icon: Check, text: "Mentor IA Personalizado" },
                    { icon: Check, text: "Certificados verificados" },
                    { icon: Shield, text: "Acesso antecipado a recursos" }
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white font-medium group">
                      <div className="bg-primary/20 p-1.5 rounded-full flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                        <item.icon size={14} className="text-primary" />
                      </div> 
                      <span className={item.bold ? "font-bold" : ""}>{item.text}</span>
                    </li>
                  ))}
              </ul>

              <button 
                  onClick={handleSubscribe}
                  className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-primary to-purple-600 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/30 transition-all text-white text-lg relative overflow-hidden group"
              >
                  <span className="relative z-10">Assinar Agora</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              <p className="text-center text-xs text-gray-500 mt-4">7 dias grátis, cancele quando quiser.</p>
          </div>

        </div>
      </div>
    </div>
  );
}