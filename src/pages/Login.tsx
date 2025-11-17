import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api'; // O nosso cliente Axios
import { Usuario } from '../types/usuario'; // O tipo que definimos
import axios from 'axios';

// Baseado na sua imagem da tela de Login
export function Login() {
  const navigate = useNavigate(); // Hook para navegar entre páginas
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [erro, setErro] = useState('');
  
  // (Opcional) Armazena o usuário logado
  // const [usuario, setUsuario] = useState<Usuario | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro(''); // Limpa erros antigos

    try {
      // 1. Tenta fazer o Login
      const response = await api.post<Usuario>('/usuarios/login', { email });
      
      // Se deu certo (200 OK)
      console.log('Login com sucesso!', response.data);
      // setUsuario(response.data);
      
      // Navega para o dashboard
      // (Vamos criar a rota /dashboard no próximo passo)
      navigate('/dashboard'); 

    } catch (error) {
      // 2. Se o Login falhou (ex: 404 Not Found)
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        
        // Se o usuário não existe, tenta fazer o Cadastro
        if (nome) { // Só cadastra se o nome foi preenchido
          handleCadastro();
        } else {
          setErro('Usuário não encontrado. Preencha seu nome para se cadastrar.');
        }
        
      } else {
        // Outro erro (ex: 500 Erro de servidor)
        console.error(error);
        setErro('Ocorreu um erro. Tente novamente.');
      }
    }
  };

  const handleCadastro = async () => {
    try {
      // Tenta cadastrar
      const response = await api.post<Usuario>('/usuarios', { nome, email });
      console.log('Cadastro com sucesso!', response.data);
      // setUsuario(response.data);
      
      // Navega para o Questionário
      // (Vamos criar a rota /questionario depois)
      navigate('/questionario'); 

    } catch (error) {
      // 3. Se o Cadastro falhou (ex: 409 E-mail duplicado)
      if (axios.isAxiosError(error) && error.response?.status === 409) {
        setErro('Este e-mail já está em uso. Tente fazer o login.');
      } else {
        console.error(error);
        setErro('Ocorreu um erro no cadastro.');
      }
    }
  };


  return (
    // Note que usamos `pt-20` (padding-top) para não ficar colado no Header
    <div className="flex flex-col items-center justify-center pt-20">
      
      {/* O "Bem-vindo" da sua imagem */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Bem-vindo!</h1>
        <h2 className="text-3xl text-gray-300">AuraQuest te espera aqui ;)</h2>
        <p className="text-lg text-gray-400 mt-4">Sua jornada de hoje começa aqui:</p>
      </div>

      {/* O formulário de login */}
      <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
        
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-gray-300">Coloque seu melhor E-mail</label>
          <input 
            id="email" 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500" 
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="nome" className="block mb-2 text-gray-300">Como deseja ser chamado? (Preencha para cadastrar)</label>
          <input 
            id="nome" 
            type="text" 
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500" 
          />
        </div>

        {/* Mostra mensagens de erro */}
        {erro && (
          <p className="text-red-400 text-center mb-4">{erro}</p>
        )}

        <button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-bold text-lg transition-colors"
        >
          Ganhar XP's!
        </button>

      </form>
    </div>
  );
}