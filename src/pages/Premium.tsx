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
    <div className="min-h-screen py-12 px-4 flex flex-col items-center justify-center bg-[#0a0b14] relative overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <button 
        onClick={() => navigate('/dashboard')}
        className="absolute top-6 left-6 md:top-10 md:left-10 text-gray-400 hover:text-white flex items-center gap-2 transition-colors z-20"
      >
        <ArrowLeft size={20} /> Voltar
      </button>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <span className="inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider border border-primary/20">
            Seja Lenda
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight">
            Desbloqueie seu <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-500">
              Potencial Máximo
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Acelere sua carreira com acesso ilimitado a todas as trilhas, mentoria de IA e certificado oficial reconhecido pelo mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl items-start">
          
          <div className="bg-[#161821] border border-gray-800 p-8 rounded-3xl flex flex-col">
              <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white">Explorador</h3>
                  <p className="text-gray-500">Para quem está começando</p>
                  <div className="mt-6 flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-white">R$ 0</span>
                      <span className="text-gray-500 text-xl">/mês</span>
                  </div>
              </div>
              
              <ul className="space-y-5 mb-10 flex-1">
                  <li className="flex items-center gap-3 text-gray-300 font-medium"><Check size={20} className="text-green-500" /> 3 Missões por dia</li>
                  <li className="flex items-center gap-3 text-gray-300 font-medium"><Check size={20} className="text-green-500" /> Acesso a trilhas básicas</li>
                  <li className="flex items-center gap-3 text-gray-300 font-medium"><Check size={20} className="text-green-500" /> Registro de Humor</li>
                  <li className="flex items-center gap-3 text-gray-600"><X size={20} /> Sem mentoria de IA</li>
                  <li className="flex items-center gap-3 text-gray-600"><X size={20} /> Sem certificados</li>
              </ul>

              <button 
                  onClick={() => navigate('/dashboard')}
                  className="w-full py-4 rounded-xl font-bold bg-gray-800 hover:bg-gray-700 transition-all text-white border border-gray-700"
              >
                  Continuar Grátis
              </button>
          </div>

          <div className="relative bg-[#0f1016] border-2 border-primary/60 p-8 rounded-3xl flex flex-col shadow-[0_0_50px_rgba(79,70,229,0.15)] transform md:-translate-y-4">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 tracking-wide">
                  <Crown size={16} className="fill-yellow-400 text-yellow-400" /> RECOMENDADO
              </div>

              <div className="mb-8 pt-2">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                      Aura Master <Zap size={24} className="text-yellow-400 fill-yellow-400" />
                  </h3>
                  <p className="text-indigo-200">Evolução sem limites</p>
                  <div className="mt-6 flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-white">R$ 19,90</span>
                      <span className="text-gray-500 text-xl">/mês</span>
                  </div>
              </div>
              
              <ul className="space-y-5 mb-10 flex-1">
                  <li className="flex items-center gap-3 text-white font-medium"><div className="bg-primary/20 p-1 rounded-full"><Check size={14} className="text-primary" /></div> <strong>Missões ILIMITADAS</strong></li>
                  <li className="flex items-center gap-3 text-white font-medium"><div className="bg-primary/20 p-1 rounded-full"><Check size={14} className="text-primary" /></div> Todas as trilhas liberadas</li>
                  <li className="flex items-center gap-3 text-white font-medium"><div className="bg-primary/20 p-1 rounded-full"><Check size={14} className="text-primary" /></div> Mentor IA Personalizado</li>
                  <li className="flex items-center gap-3 text-white font-medium"><div className="bg-primary/20 p-1 rounded-full"><Check size={14} className="text-primary" /></div> Certificados verificados</li>
                  <li className="flex items-center gap-3 text-white font-medium"><div className="bg-primary/20 p-1 rounded-full"><Shield size={14} className="text-primary" /></div> Acesso antecipado a recursos</li>
              </ul>

              <button 
                  onClick={handleSubscribe}
                  className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-primary to-purple-600 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25 transition-all text-white text-lg"
              >
                  Assinar Agora
              </button>
              <p className="text-center text-xs text-gray-500 mt-4">7 dias grátis, cancele quando quiser.</p>
          </div>

        </div>
      </div>
    </div>
  );
}