import { Link } from 'react-router-dom';
import { Home, Ghost } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-6 text-center relative overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10">
        <div className="mb-8 animate-bounce">
          <Ghost size={80} className="text-primary mx-auto opacity-80" />
        </div>

        <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground mb-4">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Perdido no Espaço?
        </h2>

        <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
          A página que você procura não existe ou foi movida para outra dimensão.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-indigo-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/25 hover:scale-105"
        >
          <Home size={20} />
          Voltar para o Início
        </Link>
      </div>

    </div>
  );
}