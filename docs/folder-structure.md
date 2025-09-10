📦 crm-web
├─ 📂 src
│ ├─ 📂 app
│ │ ├─ 📂 (auth)
│ │ │ └─ 📂 login
│ │ │ └─ page.tsx # Página de login
│ │ ├─ 📂 dashboard
│ │ │ └─ page.tsx # Página principal do dashboard
│ │ ├─ 📂 clients
│ │ │ ├─ page.tsx # Listagem de clientes
│ │ │ ├─ new
│ │ │ │ └─ page.tsx # Formulário de novo cliente
│ │ │ └─ [id]
│ │ │ └─ page.tsx # Edição de cliente
│ │ ├─ layout.tsx # Layout global (sidebar + header)
│ │ └─ page.tsx # Redireciona pro dashboard
│ │
│ ├─ 📂 components
│ │ ├─ 📂 ui
│ │ │ ├─ Button.tsx # Botões reutilizáveis
│ │ │ ├─ Input.tsx # Campos de input
│ │ │ ├─ Modal.tsx # Modal genérico
│ │ │ └─ Card.tsx # Card genérico (dashboard)
│ │ ├─ Sidebar.tsx # Menu lateral
│ │ ├─ Header.tsx # Cabeçalho superior
│ │ ├─ ClientForm.tsx # Form de criação/edição de cliente
│ │ └─ ClientTable.tsx # Tabela de clientes
│ │
│ ├─ 📂 contexts
│ │ └─ AuthContext.tsx # Contexto de autenticação
│ │
│ ├─ 📂 hooks
│ │ └─ useAuth.tsx # Hook customizado de auth
│ │
│ ├─ 📂 lib
│ │ ├─ api.ts # Instância axios/fetch centralizada
│ │ ├─ auth.ts # Helpers de autenticação (JWT, cookies)
│ │ └─ validations.ts # Funções de validação (CPF, email, etc.)
│ │
│ ├─ 📂 services
│ │ ├─ clientService.ts # CRUD de clientes (chamadas API)
│ │ └─ authService.ts # Login/logout/refresh token
│ │
│ ├─ 📂 styles
│ │ └─ globals.css # Estilos globais
│ │
│ ├─ 📂 types
│ │ ├─ client.ts # Tipagens de Cliente
│ │ └─ auth.ts # Tipagens de Auth
│ │
│ └─ 📂 utils
│ ├─ formatDate.ts # Formatação de datas
│ ├─ cpfUtils.ts # Utilidades para CPF
│ └─ logger.ts # Logger simples
│
├─ 📂 docs # Documentação do projeto
│ ├─ architecture.md
│ ├─ api.md
│ └─ readme-guides.md
│
├─ .env.local # Variáveis de ambiente (dev)
├─ next.config.js # Configurações do Next.js
├─ package.json
├─ tsconfig.json
└─ README.md
