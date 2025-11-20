import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircleQuestion } from 'lucide-react';
import clsx from 'clsx';

interface FaqItem {
  pergunta: string;
  resposta: string;
}

const faqData: FaqItem[] = [
  {
    pergunta: "O que é o AuraQuest?",
    resposta: "O AuraQuest é uma plataforma gamificada focada em requalificação profissional e bem-estar. Aqui você completa trilhas de aprendizado (Upskilling) e realiza check-ins diários de humor para ganhar XP e evoluir seu nível, equilibrando carreira e saúde mental."
  },
  {
    pergunta: "Como ganho XP (Experiência)?",
    resposta: "Você ganha XP ao completar missões diárias, finalizar cursos nas trilhas de conhecimento e registrar seu diário de bem-estar. Usuários Premium têm acesso a multiplicadores de XP e missões especiais."
  },
  {
    pergunta: "O plano gratuito tem limitações?",
    resposta: "Sim. No plano 'Explorador' (gratuito), você pode realizar até 3 missões por dia e tem acesso às trilhas básicas. Para acesso ilimitado, mentoria de IA e certificados verificados, recomendamos o plano 'Aura Master'."
  },
  {
    pergunta: "Como funciona a Mentoria de IA?",
    resposta: "Nossa IA analisa seu perfil, suas respostas no questionário inicial e seu progresso nas trilhas para sugerir conteúdos personalizados e dicas de carreira. Este recurso é exclusivo para assinantes Premium."
  },
  {
    pergunta: "Posso cancelar minha assinatura Premium?",
    resposta: "Sim, você pode cancelar a qualquer momento através das configurações da sua conta. O acesso aos benefícios Premium continuará ativo até o final do período já pago."
  },
  {
    pergunta: "Meus dados de bem-estar são privados?",
    resposta: "Absolutamente. Seus registros no Diário de Bem-Estar são confidenciais e usados apenas para gerar insights pessoais para você e, de forma anônima e agregada, para melhorar as sugestões da plataforma."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen pb-20 pt-10 px-4 flex flex-col items-center relative overflow-hidden">
      
      {}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl w-full space-y-12">
        
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center p-4 bg-surface rounded-full border border-gray-800 shadow-xl mb-4">
            <MessageCircleQuestion size={40} className="text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Perguntas <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
              Frequentes
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tire suas dúvidas sobre a jornada AuraQuest e aproveite ao máximo sua experiência.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={clsx(
                  "bg-surface rounded-2xl border transition-all duration-300 overflow-hidden",
                  isOpen ? "border-primary/50 shadow-[0_0_30px_rgba(79,70,229,0.15)]" : "border-gray-800 hover:border-gray-700"
                )}
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle size={24} className={clsx("transition-colors", isOpen ? "text-primary" : "text-gray-600")} />
                    <span className={clsx("text-lg font-bold transition-colors", isOpen ? "text-white" : "text-gray-300")}>
                      {item.pergunta}
                    </span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="text-primary" />
                  ) : (
                    <ChevronDown className="text-gray-500" />
                  )}
                </button>
                
                <div 
                  className={clsx(
                    "px-6 text-gray-400 leading-relaxed overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
                  )}
                >
                  <div className="pl-10 border-l-2 border-gray-800">
                    {item.resposta}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center pt-12">
          <p className="text-gray-500">
            Ainda tem dúvidas? <a href="#" className="text-primary hover:text-purple-400 font-bold transition-colors">Entre em contato com o suporte</a>
          </p>
        </div>

      </div>
    </div>
  );
}