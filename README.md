
# AuraQuest 🚀

> **Global Solution 2025 - FIAP**
> *O Futuro do Desenvolvimento Humano: Upskilling e Bem-Estar.*

🔗 **Acesse a Aplicação Online:** [Vercel](https://aura-quest.vercel.app/)

---

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

O **AuraQuest** é uma plataforma gamificada desenvolvida para combater *burnout* e estagnação profissional, unindo **Upskilling** (desenvolvimento técnico) com **Bem-Estar** (monitoramento emocional).

Com elementos de RPG, o usuário completa trilhas de estudo, realiza check-ins de humor e evolui seu personagem através de XP, níveis, conquistas e ranking global.

Além disso, a aplicação oferece recomendações personalizadas (simuladas por IA) baseadas no perfil do usuário.

---

## 🛠️ Tecnologias Utilizadas

* **Frontend:** React + Vite
* **Linguagem:** TypeScript
* **Estilização:** Tailwind CSS
* **Roteamento:** React Router DOM
* **Ícones:** Lucide React
* **Consumo de API:** Axios

---

## 📦 Instalação

### **Pré-requisitos**

* Node.js (v16+)
* NPM ou Yarn

### **Passo a passo**

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Liga-dos-Viloes/AuraQuest.git
   cd auraquest
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Execute o projeto:**

   ```bash
   npm run dev
   ```

4. **Acesse no navegador:**
   [http://localhost:5173](http://localhost:5173)

> 💡 A API já está configurada no arquivo `src/api/api.ts` para o servidor de produção, não sendo necessário configurar backend local.

---

## 🚀 Como Usar

1. **Login/Cadastro:**
   Utilize um e-mail corporativo. Caso não exista, o sistema realiza cadastro automático após informar o nome.

2. **Onboarding:**
   Preencha o questionário inicial para definir trilhas e recomendações personalizadas.

3. **Dashboard:**

   * Acompanhe nível, XP e posição no ranking
   * Registre o humor diário
   * Veja suas trilhas e missões
   * Complete missões para ganhar **+100 XP**

4. **Premium:**
   Após 3 missões/dia, o usuário visualiza o *paywall* simulando o modelo Freemium.

---

## 📂 Estrutura de Pastas

```text
src/
├── api/              # Configuração do Axios (api.ts)
├── components/       # Componentes reutilizáveis
├── pages/            # Páginas principais
│   ├── Dashboard
│   ├── Login
│   ├── Premium
│   ├── Questionario
│   ├── Sobre
│   └── Integrantes
├── types/            # Tipos e interfaces TypeScript
├── App.tsx           # Configuração de rotas
└── main.tsx          # Ponto de entrada
```

---

## 🔗 Endpoints e Rotas Principais

### **Rotas Frontend**

| Rota            | Descrição          |
| --------------- | ------------------ |
| `/`             | Login              |
| `/dashboard`    | Painel gamificado  |
| `/questionario` | Onboarding         |
| `/premium`      | Assinatura Premium |
| `/integrantes`  | Equipe             |
| `/sobre`        | Sobre o projeto    |

### **Endpoints API (Backend)**

| Método | Endpoint            | Função          |
| ------ | ------------------- | --------------- |
| `POST` | `/usuarios/login`   | Login           |
| `POST` | `/usuarios`         | Cadastro        |
| `GET`  | `/trilhas`          | Listar trilhas  |
| `POST` | `/diarios`          | Registrar humor |
| `PUT`  | `/usuarios/{id}/xp` | Atualizar XP    |

---

## 👥 Autores e Créditos

| Nome                            | RM        | Função                  | GitHub                                                                                 |
| ------------------------------- | --------- | ----------------------- | -------------------------------------------------------------------------------------- |
| **Leandro Guarido de Oliveira** | RM561760  | Backend Developer       | [https://github.com/LeandroGuaridoOliveira](https://github.com/LeandroGuaridoOliveira) |
| **Gabriel Costa Solano**        | RM562325  | Apoio Moral e Técnico   | [https://github.com/GabSolano](https://github.com/GabSolano)                           |
| **Kaiky Pereira da Silva**      | RM564578  | Genesys Cloud Developer | [https://github.com/rodrigueszkkk](https://github.com/rodrigueszkkk)                   |
| **Leandro Cavallari Silva**     | Professor | Full Stack Developer    | [https://github.com/Leandroyyy](https://github.com/Leandroyyy)                         |

---

## 📸 Screenshots / Demonstração

### **Dashboard**

<img src="https://github.com/user-attachments/assets/a603c8f8-d95e-4703-941d-ca795625c1c8" width="100%" />

### **Tela Premium**

<img src="https://github.com/user-attachments/assets/f58d7ef0-776b-4646-a5db-1fd6f73cd2fa" width="100%" />
<img src="https://github.com/user-attachments/assets/e12e22e2-8877-4ba0-851d-c6411e9f894a" width="100%" />

---

## 🔗 Links

### 🐱 **Repositório GitHub:**

[https://github.com/Liga-dos-Viloes/AuraQuest.git](https://github.com/Liga-dos-Viloes/AuraQuest.git)

### 🎬 **Vídeo Pitch/Demo:**

[https://youtu.be/pXz1tX0V4MM](https://youtu.be/cPoUkEekmmY)

### 🌐 **Deploy Frontend (Vercel):**

[Vercel](https://aura-quest.vercel.app/)

---

## 📞 Contato

Se quiser entrar em contato com a equipe ou relatar algum problema, utilize o repositório no GitHub ou abra uma *issue*.

---

