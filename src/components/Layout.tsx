import { Outlet, Link } from 'react-router-dom';

export function Layout() {
  return (
    <div className="min-h-screen bg-background text-white flex flex-col">
      
      <header className="w-full h-20 flex items-center justify-between px-8 border-b border-gray-800 bg-surface/50 backdrop-blur-md sticky top-0 z-50">
        <nav className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            AuraQuest
          </Link>
          
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors hover:bg-white/5 px-3 py-2 rounded-lg">
              Dashboard
            </Link>
            <Link to="/integrantes" className="text-gray-300 hover:text-white transition-colors hover:bg-white/5 px-3 py-2 rounded-lg">
              Integrantes
            </Link>
            <Link to="/faq" className="text-gray-300 hover:text-white transition-colors hover:bg-white/5 px-3 py-2 rounded-lg">
              FAQ
            </Link>
            <Link to="/sobre" className="text-gray-300 hover:text-white transition-colors hover:bg-white/5 px-3 py-2 rounded-lg">
              Sobre
            </Link>
          </div>
        </nav>
        
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
            K
          </div>
        </div>
      </header>
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Outlet />
      </main>

      <footer className="text-center py-8 border-t border-gray-800 mt-auto text-sm text-gray-500">
        <p>
          AuraQuest © 2025 - Global Solution
        </p>
      </footer>
    </div>
  );
}