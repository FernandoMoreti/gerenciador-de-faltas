# 📚 Gerenciador de Faltas Escolares

Sistema web completo para gestão de faltas escolares, permitindo que professores acompanhem alunos de diferentes escolas e turmas.

## 🧩 Estrutura do Projeto

gerenciador-de-faltas/

├── frontend/ # Aplicação React (interface do usuário)

├── backend/ # API Node.js + Express (servidor e banco de dados)

└── README.md # Este arquivo

## 🚀 Tecnologias Utilizadas

### 🔷 Frontend
- React.js
- React Router DOM
- Styled-Components
- Fetch API
- Context API

### 🔶 Backend
- Node.js
- Express.js
- PostgreSQL

## 🛠️ Como Rodar Localmente

### Pré-requisitos

- Node.js e npm instalados (ou yarn/ eu ultilizo yarn)
- Banco de dados local (PostgreSQL)
- Git instalado

### 🔧 1. Clonar o repositório

git clone https://github.com/FernandoMoreti/gerenciador-de-faltas

📦 2. Instalar dependências

Backend
cd backend
yaar add / npm install
Frontend
cd frontend
yaar add / npm install

▶️ 3. Executar o projeto
Backend (porta padrão: 8000)
cd backend
npm run dev / yarn dev

Frontend (porta padrão: 3000)
cd frontend
npm start / yarn start

🧪 Scripts úteis
Backend (package.json)
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}

🧠 Funcionalidades Planejadas
Cadastro e autenticação de usuários

Registro de faltas por turma/aluno

Filtros por data e turma

Painel administrativo com gráficos e relatórios

Exportação de dados em PDF/Excel

Sistema de permissões (professor/coordenador/admin)

Notificações automáticas para pais/responsáveis

🧑‍💻 Autor
Desenvolvido por Fernando Moreti
