// Cantina Zafferano — menu móvel e filtro de categorias do cardápio.

(function () {
  "use strict";

  // Menu móvel
  var botaoMenu = document.querySelector(".menu-botao");
  var menu = document.getElementById("menu");

  if (botaoMenu && menu) {
    botaoMenu.addEventListener("click", function () {
      var aberto = botaoMenu.getAttribute("aria-expanded") === "true";
      botaoMenu.setAttribute("aria-expanded", String(!aberto));
      menu.classList.toggle("esta-aberto", !aberto);
    });

    menu.addEventListener("click", function (evento) {
      if (evento.target.tagName === "A") {
        botaoMenu.setAttribute("aria-expanded", "false");
        menu.classList.remove("esta-aberto");
      }
    });
  }

  // Filtro do cardápio
  var filtros = document.querySelectorAll(".filtro");
  var categorias = document.querySelectorAll(".categoria");

  Array.prototype.forEach.call(filtros, function (filtro) {
    filtro.addEventListener("click", function () {
      var escolhida = filtro.getAttribute("data-categoria");

      Array.prototype.forEach.call(filtros, function (outro) {
        outro.setAttribute("aria-pressed", String(outro === filtro));
      });

      Array.prototype.forEach.call(categorias, function (categoria) {
        var nome = categoria.getAttribute("data-categoria");
        categoria.hidden = !(escolhida === "todas" || escolhida === nome);
      });
    });
  });
})();
