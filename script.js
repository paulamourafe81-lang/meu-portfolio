const projetos = [
   {
    nome: "Portfólio",
    descricao: "Projeto usando HTML, CSS e JavaScript",
    link: "https://github.com/paulamourafe81-lang/meu-portfolio.git"
  },
  {
    nome: "Portfólio com React",
    descricao: "Portfolio utilizando React",
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
    <a href="${projeto.link}" target="_blank"> Ver no Github </a>
  `;

  lista.appendChild(div);
});
