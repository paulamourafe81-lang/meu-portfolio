const projetos = [
   {
    nome: "Portfólio",
    descricao: "Projeto usando HTML, CSS e JavaScript",
    link: "https://github.com/paulamourafe81-lang/meu-portfolio.git"
  },
  {
    nome: "Lista de Tarefas",
    descricao: "Aplicação simples para organizar tarefas",
    link: "https://github.com/paulamourafe81-lang/portfolio-react.git"
  }
];

const lista = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
  const div = document.createElement("div");
  div.classList.add("projeto");

  div.innerHTML = `
    <h3>${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
    <a href=${projeto.link}> Ver no Github </a>
  `;

  lista.appendChild(div);
});
