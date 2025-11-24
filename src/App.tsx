import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Login } from './pages/Login';
import { Questionario } from './pages/Questionario';
import { NotFound } from './pages/NotFound';
import { Dashboard } from './pages/Dashboard';
import { Premium } from './pages/Premium';
import { FAQ } from './pages/FAQ';
import { Integrantes } from './pages/Integrantes';
import { Sobre } from './pages/Sobre';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/questionario" element={<Questionario />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/integrantes" element={<Integrantes />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;