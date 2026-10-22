// PORTFÓLIO-PARÓDIA: os projetos abaixo são fictícios e deliberadamente absurdos.
// Os links sociais levam a perfis de referência de outras pessoas — não são perfis do Guilherme.

const DATA = {
  email: "salesguilherme790@gmail.com",

  links: [
    ["GitHub ", "https://github.com/torvalds"],
    ["LinkedIn ", "https://www.linkedin.com/in/satyanadella/"]
  ],

  projects: [
    {
      t: "ApolloOS — o sistema que levou a humanidade à Lua",
      ctx: "Engenharia aeroespacial",
      d: "Criei sozinho um sistema operacional tão estável que a NASA aposentou 4.000 planilhas, três supercomputadores e um estagiário chamado Kevin.",
      tech: ["TypeScript", "C", "NASA", "Café"],
      url: null
    },
    {
      t: "BugGPT — inteligência artificial que corrige o próprio corrigimento",
      ctx: "IA que sabe demais",
      d: "Uma IA que encontra o bug antes de ele existir, prevê o próximo erro de digitação e abre um pull request com a correção de uma ideia que eu ainda nem tive.",
      tech: ["Python", "Node.js", "Machine Learning", "mente"],
      url: null
    },
    {
      t: "Internet 2 — latência negativa",
      ctx: "Infraestrutura metafisica",
      d: "Uma rede experimental que entrega a resposta antes de a requisição ser enviada. O projeto foi descontinuado porque os servidores começaram a receber tráfego vindo de depois de amanha.",
      tech: ["Java", "Rust", "Redes", "tempo"],
      url: null
    }
  ],

  stack: [
    ["Frontend", ["HTML", "CSS", "JavaScript", "React"]],
    ["Backend", ["Node.js", "Java", "APIs REST"]],
    ["Dados", ["SQL", "PostgreSQL"]]
  ]
};

const $ = (selector) => document.querySelector(selector);

const criarElemento = (tag, classe, texto) => {
  const elemento = document.createElement(tag);
  if (classe) elemento.className = classe;
  if (texto) elemento.textContent = texto;
  return elemento;
};

DATA.projects.forEach((projeto) => {
  const item = criarElemento("li");
  const resumo = criarElemento("div");
  const detalhes = criarElemento("div");

  resumo.append(
    criarElemento("h3", "", projeto.t),
    criarElemento("p", "ctx", projeto.ctx)
  );

  detalhes.append(criarElemento("p", "", projeto.d));

  projeto.tech.forEach((tecnologia) => {
    detalhes.append(criarElemento("span", "tag", tecnologia));
  });

  if (projeto.url) {
    const link = criarElemento("a", "demo", "Ver projeto");
    link.href = projeto.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    detalhes.append(link);
  }

  item.append(resumo, detalhes);
  $("#projList").append(item);
});

DATA.stack.forEach(([grupo, tecnologias]) => {
  const bloco = criarElemento("div");
  bloco.append(criarElemento("h3", "", grupo));

  tecnologias.forEach((tecnologia) => {
    bloco.append(criarElemento("span", "tag", tecnologia));
  });

  $("#stackList").append(bloco);
});

const email = criarElemento("a", "btn pri", "Enviar e-mail salesguilherme790@gmail.com");
email.href = ``;
$("#links").append(email);

DATA.links.forEach(([nome, url]) => {
  const link = criarElemento("a", "btn", nome);
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  $("#links").append(link);
});

$("#yr").textContent = new Date().getFullYear();

$("#p").addEventListener("input", (evento) => {
  document.documentElement.style.setProperty("--p", evento.target.value / 100);
});
