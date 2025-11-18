import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-9xl font-bold text-blue-500">404</h1>
      <h2 className="text-4xl font-semibold mt-4 mb-2">Página Não Encontrada</h2>
      <p className="text-lg text-gray-400 mb-8">
        Desculpe, a página que você está procurando não existe.
      </p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-bold transition-colors"
      >
        Voltar para o Início
      </Link>
    </div>
  );
}