# Milestone 1 – Project Setup & Authentication

- Initialize Next.js project / Inicializar projeto Next.js

* Create Next.js project with TypeScript template. / Criar projeto Next.js com template TypeScript.
* Configure ESLint + Prettier. / Configurar ESLint + Prettier.
* Setup TailwindCSS (ou Styled Components). / Configurar TailwindCSS (ou Styled Components).

- Setup project structure / Configurar estrutura do projeto

* Create folder structure: `app`, `components`, `services`, `contexts`. / Criar estrutura de pastas.
* Add layout with sidebar and header placeholder. / Criar layout com sidebar e header placeholder.

- Implement authentication context / Implementar contexto de autenticação

* Create AuthContext to manage user state. / Criar AuthContext para gerenciar estado do usuário.
* Add login page with username/password fields. / Adicionar página de login com campos de usuário/senha.
* Integrate with backend JWT endpoint. / Integrar com endpoint JWT do backend.
* Redirect authenticated user to dashboard. / Redirecionar usuário autenticado para dashboard.

- Acceptance Criteria (DoD) / Critérios de Aceitação (DoD):

* Project runs locally with Next.js. / Projeto roda localmente com Next.js.
* User can log in with backend credentials. / Usuário consegue logar com credenciais do backend.
* Authenticated routes are protected. / Rotas autenticadas estão protegidas.

---

# Milestone 2 – MVP Functional (CRUD Clientes + Dashboard)

- Create dashboard page / Criar página de dashboard

* Add cards: total de clientes, novos clientes, idade média. / Adicionar cards: total de clientes, novos clientes, idade média.
* Fetch metrics from backend. / Buscar métricas do backend.

- Implement clients list page / Implementar página de listagem de clientes

* Display table with name, CPF, email, idade. / Exibir tabela com nome, CPF, email, idade.
* Add search bar (filter by nome ou CPF). / Adicionar barra de busca (filtrar por nome ou CPF).
* Add pagination controls. / Adicionar paginação.

- Implement create client form / Implementar formulário de criação de cliente

* Form fields: Nome, CPF, Email, Data de Nascimento. / Campos: Nome, CPF, Email, Data de Nascimento.
* Add validation (CPF válido, email válido, data obrigatória). / Adicionar validação.
* Save client to backend. / Salvar cliente no backend.

- Implement edit client functionality / Implementar edição de cliente

* Reuse form to update client info. / Reutilizar formulário para editar cliente.
* Populate fields with client data. / Preencher campos com dados do cliente.

- Implement delete client confirmation / Implementar confirmação de exclusão

* Show modal before deletion. / Exibir modal antes da exclusão.
* Confirm action removes client. / Confirmar ação remove cliente.

- Deploy MVP / Deploy do MVP

* Deploy project to Vercel (ou Render). / Deploy do projeto no Vercel (ou Render).
* Ensure environment variables are configured. / Garantir configuração de variáveis de ambiente.

- Acceptance Criteria (DoD) / Critérios de Aceitação (DoD):

* Dashboard shows client metrics. / Dashboard exibe métricas de clientes.
* Users can list, search, add, edit, delete clients. / Usuários podem listar, buscar, cadastrar, editar, excluir clientes.
* Application is deployed and accessible. / Aplicação está em produção e acessível.

---

# Milestone 3 – UI Refinements & Responsiveness

- Apply design styling / Aplicar estilo do design

* Update components to match design (cores, espaçamento, tipografia). / Atualizar componentes para seguir o design.
* Style sidebar and header properly. / Estilizar sidebar e header corretamente.

- Add client chart to dashboard / Adicionar gráfico no dashboard

* Display chart of new clients over time. / Exibir gráfico de novos clientes ao longo do tempo.

- Improve responsiveness / Melhorar responsividade

* Optimize layout for mobile and tablet. / Otimizar layout para mobile e tablet.
* Test breakpoints for common resolutions. / Testar breakpoints em resoluções comuns.

- Add UI feedback / Adicionar feedback visual

* Show loaders while fetching. / Exibir loaders durante fetch.
* Show success/error toasts on CRUD actions. / Exibir toasts de sucesso/erro no CRUD.

- Acceptance Criteria (DoD) / Critérios de Aceitação (DoD):

* Design is consistent with mockup. / Design consistente com o mockup.
* Dashboard includes chart. / Dashboard inclui gráfico.
* Layout works in desktop, tablet, mobile. / Layout funciona em desktop, tablet e mobile.
* User actions give clear feedback. / Ações do usuário exibem feedback visual.

---

# Milestone 4 – Extras & Post-MVP Enhancements

- Add user profile page / Adicionar página de perfil do usuário

* Display basic info (nome, email). / Exibir informações básicas.
* Option to change password. / Opção de alterar senha.

- Add settings page / Adicionar página de configurações

* Create basic configuration options. / Criar opções básicas de configuração.

- Add global search / Adicionar busca global

* Search bar in header searches across clients. / Barra de busca global no header.

- Add automated tests / Adicionar testes automatizados

* Unit tests with Jest/RTL. / Testes unitários com Jest/RTL.
* E2E tests with Cypress/Playwright. / Testes E2E com Cypress/Playwright.

- Add dark mode (optional) / Adicionar dark mode (opcional)

* Toggle between light/dark themes. / Alternar entre temas claro/escuro.

- Acceptance Criteria (DoD) / Critérios de Aceitação (DoD):

* User can update profile. / Usuário consegue atualizar perfil.
* Settings page exists. / Página de configurações criada.
* Global search works. / Busca global funcional.
* Tests run and pass in CI. / Testes executam e passam no CI.
* Dark mode available if enabled. / Dark mode disponível se habilitado.
