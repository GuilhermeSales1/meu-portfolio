# Arquitetura

SPA construída com React, TypeScript e Vite. React Router organiza as rotas. TanStack Query centraliza a consulta à API do GitHub e mantém cache por dez minutos. React Hook Form e Zod validam o formulário.

## Decisões
- Vite: desenvolvimento e build simples para SPA.
- React Router: navegação por páginas e rota 404.
- TanStack Query: cache, loading, retry e erro para dados remotos.
- CSS autoral: preserva identidade visual sem framework adicional.

## Evolução planejada
Dashboard privado, autenticação, banco de mensagens e envio de e-mail ainda precisam ser integrados e configurados.