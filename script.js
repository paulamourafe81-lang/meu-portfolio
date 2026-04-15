const projetos = [
  {
    nome: "Site de Restaurante",
    descricao: "Projeto usando HTML, CSS e JavaScript"
  },
  {
    nome: "Lista de Tarefas",
    descricao: "Aplicação simples para organizar tarefas"
  },
  {
    nome: "Calculadora",
    descricao: "Calculadora funcional no navegador"
  }
];

const lista = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
  const div = document.createElement("div");
  div.classList.add("projeto");

  div.innerHTML = `
    <h3>${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
  `;

  lista.appendChild(div);
});