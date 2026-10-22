# Design System — Guilherme Sales

**Conceito:** folha de desenho técnico. Grade de papel milimetrado ao fundo, linhas de 2px e um único elemento memorável: o controle “Rascunho ↔ Produto” no hero, que transforma um wireframe tracejado em interface preenchida. Ele resume a tese da página (ideia → interface → produto).

## Cores
| Papel | HEX (claro / escuro) | Uso |
|---|---|---|
| Fundo | `#ECEFF5` / `#0C1020` | Base e grade |
| Texto | `#0E1330` / `#E8ECFA` | Texto e bordas fortes |
| Destaque | `#2B44FF` / `#8FA0FF` | CTA principal, marcações do processo |
| Linha/superfície | `#BFC6DA` e `#F7F8FC` / `#2A3358` e `#141A33` | Grade, divisórias, cartões |

Azul cobalto sobre cinza-azulado evoca tinta de projeto sobre papel; um único destaque mantém a hierarquia clara. Os valores de contraste não foram medidos com ferramenta — verificar.

## Tipografia (Google Fonts, com fallback)
- **Bricolage Grotesque** (display/UI): título 800, até ~10rem, entrelinha .95; subtítulos 800 de 2–3,5rem; botões e tags 500.
- **Newsreader** (corpo): 400, 18px, entrelinha 1,6, linhas até ~60 caracteres.
Contraste entre uma grotesca expressiva e uma serifada de leitura: técnico, mas humano.

## Tom
Editorial e direto, sem marketing. Layout assimétrico com bordas retas; movimento só onde há ação (slider, hover, entrada do hero). `prefers-reduced-motion` desliga animações.

## Estrutura
Hero (quem sou + elemento interativo) → Como eu penso → Projetos (lista, não cards) → Stack → Da ideia ao produto (única sequência numerada, pois é de fato uma sequência) → Contato.

## Referências (links encontrados em pesquisa; **não abri cada site visualmente**, usei as descrições das fontes)
1. Brittany Chiang — https://brittanychiang.com/ — fontes descrevem layout de coluna única, navegação que reage ao scroll e muito espaço vazio. *Aproveitado:* navegação clara e foco em texto. *Reinterpretação:* sem sidebar nem glow.
2. Henri Heymans — https://www.henriheymans.com/ — descrito como mistura de dev e toque artístico. *Aproveitado:* ideia de personalidade no portfólio. *Reinterpretação:* personalidade via desenho técnico.
3. Ryan Furrer — https://ryanfurrer.com/ — portfólio de dev citado em curadoria. *Aproveitado:* sobriedade. *Reinterpretação:* grade visível.
4. Sophie Westfall — https://sophiewestfall.com/ — portfólio de UI/UX e branding. *Aproveitado:* o próprio site como demonstração de design.
5. Awwwards, Typography Honors — https://www.awwwards.com/inspiration_search/winner_category_typography/?page=1 — listagem de sites premiados por tipografia. *Aproveitado:* tipografia como elemento ativo do layout (nome gigante).
Limitação: a pesquisa foi por buscador; análise visual direta pendente.
