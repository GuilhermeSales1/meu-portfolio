# Guilherme Sales — Portfólio

Portfólio pessoal em React + TypeScript + Vite. Os projetos são consultados pela API pública do GitHub.

## Rodar localmente
```bash
npm install
Copy-Item .env.example .env
npm run dev
```
No macOS/Linux, use `cp .env.example .env`.

## Stack
- React + TypeScript + Vite
- React Router para rotas
- TanStack Query para cache e estados remotos
- React Hook Form + Zod para validação do formulário
- Lucide React para ícones
- CSS próprio para manter a identidade visual

## Variáveis
`VITE_GITHUB_USERNAME` define o usuário consultado. A API pública do GitHub não exige token para repositórios públicos.

## Deploy
Importe o repositório na Vercel com preset Vite, build `npm run build` e diretório `dist`. O `vercel.json` configura fallback para rotas SPA.

## Próximas etapas
Dashboard privado, autenticação e armazenamento de mensagens ainda precisam ser implementados e configurados. Testes automatizados, pipeline de lint e auditoria Lighthouse também estão pendentes. Não declare essas etapas como concluídas até executá-las.
