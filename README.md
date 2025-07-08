# 📚 Gerenciador de Faltas Escolares

Sistema web completo para gestão de faltas escolares, permitindo que professores acompanhem alunos de diferentes escolas e turmas.

---

## 🧩 Estrutura do Projeto

gerenciador-de-faltas/
├── frontend/ # Aplicação React (interface do usuário)
├── backend/ # API Node.js + Express (servidor e banco de dados)
└── README.md # Este arquivo

yaml
Copy
Edit

---

## 🚀 Tecnologias Utilizadas

### 🔷 Frontend
- React.js
- React Router DOM
- Styled-Components
- Fetch API (ou Axios)
- Context API (opcional)
- Vite ou Create React App

### 🔶 Backend
- Node.js
- Express.js
- PostgreSQL (ou outro SQL)
- Nodemon
- dotenv

---

## 🛠️ Como Rodar Localmente

### Pré-requisitos

- Node.js e npm instalados
- Banco de dados local (PostgreSQL, MySQL, etc)
- Git instalado

---

### 🔧 1. Clonar o repositório

```bash
git clone https://github.com/SEU_USUARIO/gerenciador-de-faltas.git
cd gerenciador-de-faltas
📦 2. Instalar dependências
Backend
bash
Copy
Edit
cd backend
npm install
Frontend
bash
Copy
Edit
cd ../frontend
npm install
▶️ 3. Executar o projeto
Backend (porta padrão: 8000)
bash
Copy
Edit
cd backend
npm run dev
Certifique-se de configurar o arquivo .env com as variáveis de conexão com o banco de dados.

Frontend (porta padrão: 5173 ou 3000)
bash
Copy
Edit
cd frontend
npm start
🔑 Variáveis de Ambiente
Backend (/backend/.env)
env
Copy
Edit
PORT=8000
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
🧪 Scripts úteis
Backend (package.json)
json
Copy
Edit
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
Frontend (package.json)
json
Copy
Edit
"scripts": {
  "start": "vite", // ou "react-scripts start" se for CRA
  "build": "vite build",
  "dev": "vite"
}
🧠 Funcionalidades Planejadas
Cadastro e autenticação de usuários (JWT)

Registro de faltas por turma/aluno

Filtros por data e turma

Painel administrativo com gráficos e relatórios

Exportação de dados em PDF/Excel

Sistema de permissões (professor/coordenador/admin)

Notificações automáticas para pais/responsáveis

🧑‍💻 Autor
Desenvolvido por Seu Nome Aqui
