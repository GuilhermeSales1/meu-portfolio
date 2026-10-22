# Registro de correções e evolução do projeto

> **Observação de integridade:** este documento registra mudanças que realmente foram solicitadas e realizadas durante a conversa. Não foram inventados resultados de testes, bugs observados no navegador ou evidências de funcionamento. A validação visual e funcional completa ainda está pendente.

## 1. Separação do HTML, CSS e JavaScript

**Problema / necessidade**  
O código original estava concentrado em um único arquivo HTML, com CSS dentro de `<style>` e JavaScript dentro de `<script>`. Isso dificultava a organização e a manutenção do projeto, além de não atender à preferência de manter HTML, CSS e JavaScript em arquivos separados.

**Prompt de correção**  
> quero o css, js e html separados

**Resultado**  
Os arquivos foram separados em:
- `index.html`: estrutura da página;
- `style.css`: estilos, cores, tipografia, layout e responsividade;
- `script.js`: dados dos projetos, tecnologias, links e interação do controle deslizante;
- `README.txt`: instruções básicas para executar e editar o projeto.

Também foi criado um ZIP com esses arquivos.

**Evidência**  
Os arquivos `index.html`, `style.css`, `script.js` e `README.txt` foram gerados e reunidos em `portfolio_html_css_js_separados.zip`.

**Aprendizado**  
Separar responsabilidades deixa o projeto mais fácil de entender e editar: HTML define a estrutura, CSS controla a apresentação e JavaScript cuida dos dados e das interações. Depois da separação, é importante conferir se os caminhos dos arquivos estão corretos e se a página continua funcionando.

**Status de validação:** arquivos separados; teste completo no navegador ainda não realizado.

---

## 2. Mudança de conteúdo para uma versão exagerada

**Problema / necessidade**  
A primeira versão apresentava projetos de exemplo relativamente convencionais. Foi solicitado um tom muito mais absurdo e grandioso, com descrições exageradas para tornar a página mais divertida.

**Prompt de correção**  
> Quero que você crie tudo com uma abordagem absurdamente exagerada. Por exemplo: no Projeto A, diga que desenvolvi o primeiro sistema que levou o homem à Lua. Nos links do meu GitHub e LinkedIn, inclua perfis de profissionais de altíssimo nível da área, e assim por diante.

**Resultado**  
O conteúdo foi alterado para uma versão de paródia, com projetos fictícios:
- **ApolloOS:** descrito humoristicamente como o sistema que levou a humanidade à Lua;
- **BugGPT:** uma IA fictícia que corrige bugs antes de eles existirem;
- **Internet 2:** uma rede fictícia com “latência negativa”.

O texto de apresentação e a seção de contato também foram adaptados ao tom de humor. Os projetos são explicitamente identificados como ficção, para não serem confundidos com conquistas reais.

**Evidência**  
As descrições dos três projetos e os textos atualizados estão no arquivo `script.js` e no `index.html` do pacote `portfolio_parodia_html_css_js.zip`.

**Aprendizado**  
Uma identidade visual pode ser reforçada pela linguagem e pelo conteúdo, não apenas por cores e animações. O exagero funciona como recurso de humor quando o contexto deixa claro que se trata de ficção. Para uma candidatura profissional, os exemplos fictícios devem ser substituídos por projetos reais ou apresentados explicitamente como conceitos experimentais.

**Status de validação:** conteúdo atualizado nos arquivos; revisão visual no navegador ainda pendente.

---

## 3. Inclusão de links de profissionais como referências

**Problema / necessidade**  
Foi solicitado que os links de GitHub e LinkedIn levassem a perfis de pessoas reconhecidas, em vez de links pessoais fictícios ou inexistentes.

**Prompt de correção**  
O pedido fez parte do mesmo prompt de alteração de conteúdo citado na seção anterior: usar “o link para o git de uma pessoa de alto nivel” e uma pessoa de referência no LinkedIn.

**Resultado**  
Foram incluídos:
- GitHub de Linus Torvalds: `https://github.com/torvalds`
- LinkedIn de Satya Nadella: `https://www.linkedin.com/in/satyanadella/`

Os rótulos identificam esses destinos como referências de outras pessoas, e não como perfis do proprietário do portfólio. Os links são abertos em outra aba com `rel="noopener noreferrer"`.

**Evidência**  
Os destinos estão definidos no array `DATA.links`, em `script.js`.

**Aprendizado**  
Links de referência precisam ser identificados de forma transparente. Em um portfólio profissional, é importante não dar a entender que perfis de terceiros pertencem ao autor do site. O funcionamento e o destino atual dos links ainda devem ser verificados no navegador.

**Status de validação:** URLs inseridas no código; abertura e destino não foram testados nesta etapa.


## 5. Ajuste de sintaxe no CSS durante a preparação dos arquivos

**Problema / necessidade**  
Durante a preparação do pacote separado, foi identificado no arquivo CSS extraído um caractere de escape indevido antes da variável `--display`, que poderia impedir a declaração de ser interpretada como esperado.

**Prompt de correção**  
Não houve prompt específico do usuário. Foi um ajuste técnico realizado durante a preparação dos arquivos.

**Resultado**  
O caractere de escape foi removido, deixando a declaração da variável CSS como `--display`.

**Evidência**  
A declaração foi ajustada em `style.css`.

**Aprendizado**  
Ao converter ou copiar código entre formatos, caracteres de escape e de formatação podem ser introduzidos indevidamente. É importante revisar o código gerado e, idealmente, validar o CSS no navegador ou por ferramentas de análise.

**Status de validação:** ajuste textual realizado; não foi confirmado por um teste visual ou automatizado.

---
## Resumo

Até o momento, as mudanças realizadas foram a separação dos arquivos, a alteração do conteúdo para uma paródia com projetos fictícios, a inclusão de links de profissionais como referências, a identificação explícita da ficção e um ajuste textual no CSS.

