document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const botao = document.createElement("button");
  botao.id = "alternar-tema";
  document.body.appendChild(botao);

  const temaSalvo = localStorage.getItem("tema") || "claro";
  html.setAttribute("data-tema", temaSalvo);
  atualizarBotao();

  botao.addEventListener("click", () => {
    const temaAtual = html.getAttribute("data-tema");
    const novoTema = temaAtual === "claro" ? "escuro" : "claro";
    html.setAttribute("data-tema", novoTema);
    localStorage.setItem("tema", novoTema);
    atualizarBotao();
  });

  function atualizarBotao() {
    const temaAtual = html.getAttribute("data-tema");
    botao.textContent = temaAtual === "claro" ? "🌙 Modo Escuro" : "☀️ Modo Claro";
  }
});
