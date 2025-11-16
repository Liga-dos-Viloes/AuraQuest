import { Outlet, Link } from 'react-router-dom';

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="w-full h-16 flex items-center justify-between px-8 border-b border-gray-700">
        <nav className="flex items-center gap-6">
          <Link to="/" className="text-xl font-bold text-white">
            AuraQuest
          </Link>
          <Link to="/integrantes" className="text-gray-400 hover:text-white">
            Integrantes
          </Link>
          <Link to="/sobre" className="text-gray-400 hover:text-white">
            Sobre
          </Link>
          <Link to="/faq" className="text-gray-400 hover:text-white">
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-4">
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="text-center p-4 mt-12 border-t border-gray-700">
        <p className="text-gray-500">
          AuraQuest © 2025 - Global Solution
        </p>
      </footer>
    </div>
  );
}