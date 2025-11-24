import { Github, Linkedin, Code2, Terminal, LayoutTemplate, Users, CodeIcon } from 'lucide-react';

interface Member {
  nome: string;
  rm: string;
  funcao: string;
  icon: React.ElementType;
  cor: string;
  github?: string;
  linkedin?: string;
}

const squadData: Member[] = [
  {
    nome: "Leandro Guarido de Oliveira",
    rm: "RM561760",
    funcao: "Backend Developer",
    icon: Code2,
    cor: "text-blue-400",
    github: "https://github.com/LeandroGuaridoOliveira",
    linkedin: "https://www.linkedin.com/in/leandroguaridooliveira/"
  },
  {
    nome: "Gabriel Costa Solano",
    rm: "RM562325",
    funcao: "Apoio Moral e Técnico",
    icon: LayoutTemplate,
    cor: "text-purple-400",
    github: "https://github.com/GabSolano",
    linkedin: "https://www.linkedin.com/in/gabriel-solano-165290363/"
  },
  {
    nome: "Kaiky Pereira da Silva",
    rm: "RM00000",
    funcao: "Genesys Cloud Developer",
    icon: Terminal,
    cor: "text-green-400",
    github: "https://github.com/rodrigueszkkk",
    linkedin: "https://www.linkedin.com/in/kaikypereira/"
  },
  {
    nome: "Leandro Cavallari Silva",
    rm: "Professor",
    funcao: "Full Stack Developer",
    icon: CodeIcon,
    cor: "text-green-400",
    github: "https://github.com/Leandroyyy",
    linkedin: "https://www.linkedin.com/in/leandro-cavallari/?locale=pt"
  }

];

export function Integrantes() {
  return (
    <div className="min-h-screen pb-20 pt-10 px-4 flex flex-col items-center relative overflow-hidden">

      <div className="fixed top-20 right-10 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-10 left-10 w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl w-full space-y-16">

        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center p-4 bg-surface/50 backdrop-blur-sm rounded-full border border-border shadow-2xl mb-2 animate-in fade-in zoom-in duration-700">
            <Users size={40} className="text-foreground" />
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tight">
            Nosso <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Squad
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça os desenvolvedores responsáveis por criar a experiência AuraQuest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {squadData.map((member, index) => (
            <div
              key={index}
              className="group relative bg-surface/40 backdrop-blur-md border border-border rounded-3xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:bg-surface/60"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-b from-${member.cor.split('-')[1]}-500 to-transparent rounded-3xl pointer-events-none`}></div>

              <div className={`w-20 h-20 rounded-2xl bg-black/40 flex items-center justify-center mb-6 shadow-inner ring-1 ring-white/10 group-hover:ring-${member.cor.split('-')[1]}-500/50 transition-all`}>
                <member.icon size={32} className={member.cor} />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-1">{member.nome}</h3>
              <span className="text-sm font-mono text-muted-foreground mb-4 bg-black/20 px-2 py-1 rounded border border-border">
                {member.rm}
              </span>

              <p className="text-muted-foreground font-medium mb-8">{member.funcao}</p>


              <div className="mt-auto flex gap-4 w-full justify-center border-t border-border pt-6">
                {member.github && (
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 hover:text-foreground text-muted-foreground transition-colors">
                    <Github size={20} />
                  </a>
                )}
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-foreground/5 hover:bg-blue-600/20 hover:text-blue-400 text-muted-foreground transition-colors">
                    <Linkedin size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}