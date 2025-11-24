import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import { type Usuario } from '../types/usuario';
import axios from 'axios';

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [erro, setErro] = useState('');


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro('');

    try {
      const response = await api.post<Usuario>('/usuarios/login', { email });
      localStorage.setItem('usuarioId', response.data.id.toString());

      console.log('Login com sucesso!', response.data);
      navigate('/dashboard');

    } catch (error) {

      if (axios.isAxiosError(error) && error.response?.status === 404) {

        if (nome) {
          handleCadastro();
        } else {
          setErro('Usuário não encontrado. Preencha seu nome para se cadastrar.');
        }

      } else {
        console.error(error);
        setErro('Ocorreu um erro. Tente novamente.');
      }
    }
  };

  const handleCadastro = async () => {
    try {
      const response = await api.post<Usuario>('/usuarios', { nome, email });
      localStorage.setItem('usuarioId', response.data.id.toString());

      console.log('Cadastro com sucesso!', response.data);
      navigate('/questionario');

    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 409) {
        setErro('Este e-mail já está em uso. Tente fazer o login.');
      } else {
        console.error(error);
        setErro('Ocorreu um erro no cadastro.');
      }
    }
  };


  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Bem-vindo! <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              AuraQuest
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
            te espera aqui ;)
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
            Sua jornada de requalificação e bem-estar começa agora.
            Receba missões, ganhe XP e evolua sua carreira.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md p-8 bg-surface rounded-3xl shadow-2xl border border-border"
          >
            <div className="mb-8 text-center lg:text-left">
              <h3 className="text-xl font-semibold text-foreground">Acesse sua conta</h3>
              <p className="text-sm text-muted-foreground">Preencha seus dados para continuar</p>
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-muted-foreground">E-mail Corporativo</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3.5 rounded-xl bg-background/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                placeholder="ex: kaka@fiap.com.br"
                required
              />
            </div>

            <div className="mb-8">
              <label htmlFor="nome" className="block mb-2 text-sm font-medium text-muted-foreground">
                Como deseja ser chamado?
                <span className="text-xs text-muted-foreground ml-1">(Apenas para cadastro)</span>
              </label>
              <input
                id="nome"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full p-3.5 rounded-xl bg-background/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                placeholder="Seu nome"
              />
            </div>

            {erro && (
              <div className="p-4 mb-6 text-sm text-red-200 bg-red-500/10 border border-red-500/50 rounded-xl text-center">
                {erro}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-primary hover:bg-indigo-600 text-white p-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
            >
              Ganhar XP's 🚀
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}