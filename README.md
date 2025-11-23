

# AuraQuest 🚀

> **Global Solution 2025 - FIAP**
> *O Futuro do Desenvolvimento Humano: Upskilling e Bem-Estar.*

🔗 Acesse a Aplicação Online: https://auraquest.vercel.app/

## 📋 Sumário
1. [Sobre o Projeto](#-sobre-o-projeto)
2. [Tecnologias Utilizadas](#%EF%B8%8F-tecnologias-utilizadas)
3. [Instalação](#-instalação)
4. [Como Usar](#-como-usar)
5. [Estrutura de Pastas](#-estrutura-de-pastas)
6. [Endpoints e Rotas](#-endpoints-e-rotas-principais)
7. [Autores e Créditos](#-autores-e-créditos)
8. [Screenshots](#-screenshots--demonstração)
9. [Contato](#-contato)
10. [Links Importantes](#-links)

---

## 📖 Sobre o Projeto
O **AuraQuest** é uma plataforma gamificada desenvolvida para combater o *burnout* e a estagnação profissional. A aplicação une o desenvolvimento técnico (**Upskilling**) com o monitoramento de saúde mental (**Bem-Estar**). 

Através de um sistema de RPG, o usuário completa trilhas de aprendizado e registra seu humor diário para ganhar XP, subir de nível e desbloquear conquistas, tudo isso enquanto recebe recomendações personalizadas (simuladas via IA) para sua carreira.

---

## 🛠️ Tecnologias Utilizadas
O projeto foi desenvolvido utilizando as seguintes tecnologias modernas:

* **Frontend:** [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
* **Roteamento:** [React Router DOM](https://reactrouter.com/)
* **Ícones:** [Lucide React](https://lucide.dev/)
* **Consumo de API:** [Axios](https://axios-http.com/)

---

## 📦 Instalação

Siga os passos abaixo para rodar o projeto localmente:

### Pré-requisitos
* Node.js (v16 ou superior)
* NPM ou Yarn

### Passo a passo
1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/Liga-dos-Viloes/AuraQuest.git
    cd auraquest
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Execute o projeto:**
    ```bash
    npm run dev
    ```

4.  **Acesse no navegador:**
    Abra `http://localhost:5173` (ou a porta indicada no terminal).

> **Nota:** A API já está configurada para apontar para o servidor de produção em `src/api/api.ts`, não sendo necessária configuração adicional de backend para testar o frontend.

---

## 🚀 Como Usar

1.  **Login/Cadastro:** Acesse a tela inicial. Digite um e-mail corporativo. Se o usuário não existir, o sistema pedirá seu nome para cadastro automático.
2.  **Onboarding:** Responda ao questionário inicial para definir seu perfil (ex: Backend, Frontend, IA).
3.  **Dashboard:**
    * Visualize seu nível, XP e Ranking Global.
    * Realize o check-in diário de humor clicando nos emojis.
    * Inicie trilhas de aprendizado (Upskilling ou Bem-Estar) para ganhar +100 XP por missão.
4.  **Premium:** Tente exceder o limite de 3 missões diárias para visualizar a simulação do paywall e a página de planos.

---

## 📂 Estrutura de Pastas

```text
src/
├── api/            # Configuração do Axios (api.ts)
├── components/     # Componentes reutilizáveis (Layout, TrilhaCard, Emoji, etc.)
├── pages/          # Páginas da aplicação
│   ├── Dashboard   # Painel principal gamificado
│   ├── Login       # Autenticação e cadastro
│   ├── Premium     # Página de planos de assinatura
│   ├── Questionario# Onboarding do usuário
│   ├── Sobre       # Informações institucionais
│   └── ...         # Outras páginas (FAQ, Integrantes, NotFound)
├── types/          # Interfaces TypeScript (Usuario, Trilha, Missao, etc.)
├── App.tsx         # Configuração de Rotas
└── main.tsx        # Ponto de entrada
````

-----

## 🔗 Endpoints e Rotas Principais

### Rotas da Aplicação (Frontend)

  * `/`: Login
  * `/dashboard`: Painel principal do usuário
  * `/questionario`: Onboarding inicial
  * `/premium`: Página de assinatura
  * `/integrantes`: Página da equipe
  * `/sobre`: Sobre o projeto

### Integração com API (Backend)

Principais endpoints consumidos pelo Axios em `src/api/api.ts`:

  * `POST /usuarios/login`: Autenticação de usuário.
  * `POST /usuarios`: Cadastro de novo usuário.
  * `GET /trilhas`: Busca as trilhas disponíveis.
  * `POST /diarios`: Salva o registro de humor (Emoji).
  * `PUT /usuarios/{id}/xp`: Atualiza o XP do usuário ao completar missões.

-----

## 👥 Autores e Créditos

Trabalho desenvolvido pela equipe **AuraQuest** para a Global Solution da FIAP:

| Nome | RM | Função | Links |
|------|----|--------|-------|
| **Leandro Guarido de Oliveira** | RM561760 | Backend Developer | [GitHub](https://github.com/LeandroGuaridoOliveira) |
| **Gabriel Costa Solano** | RM562325 | Apoio Moral e Técnico | [GitHub](https://github.com/GabSolano) |
| **Kaiky Pereira da Silva** | RM564578 | Genesys Cloud Developer | [GitHub](https://github.com/rodrigueszkkk) |
| **Leandro Cavallari Silva** | Professor | Full Stack Developer | [GitHub](https://github.com/Leandroyyy) |

-----

## 📸 Screenshots / Demonstração

### Tela de Dashboard


<img width="1858" height="916" alt="Dashboard" src="https://github.com/user-attachments/assets/a603c8f8-d95e-4703-941d-ca795625c1c8" />

### Tela Premium


<img width="1862" height="872" alt="premiujm" src="https://github.com/user-attachments/assets/f58d7ef0-776b-4646-a5db-1fd6f73cd2fa" />
<img width="1853" height="869" alt="prem" src="https://github.com/user-attachments/assets/e12e22e2-8877-4ba0-851d-c6411e9f894a" />


-----

## 🔗 Links

Abaixo estão os links obrigatórios para avaliação:

  * ### 🐱 **GITHUB (Repositório do Projeto):**

      * **https://github.com/Liga-dos-Viloes/AuraQuest.git**

  * ### 📺 **YOUTUBE (Vídeo Pitch/Demo):**

      * **[CLIQUE AQUI PARA ASSISTIR AO VÍDEO](https://youtu.be/pXz1tX0V4MM)**

<!-- end list -->

```
```
