import ui from "./ui.js";
import api from "./api.js";

// formulario
const formulario_pensamento = document.getElementById("pensamento-form");

// campos formulario
const pensamento_id = document.getElementById("pensamento-id");
const pensamento_conteudo = document.getElementById("pensamento-conteudo");
const pensamento_autoria = document.getElementById("pensamento-autoria");

// botoes formulario
const btn_submit = document.getElementById("botao-salvar");
const btn_cancelar = document.getElementById("botao-cancelar");

// carregar pensamentos
document.addEventListener("DOMContentLoaded", () => {
  ui.renderizarPensamentos();
});

// salvar um novo pensamento
formulario_pensamento.addEventListener("submit", async (event) => {
  event.preventDefault();

  const id = pensamento_id.value;
  const conteudo = pensamento_conteudo.value;
  const autoria = pensamento_autoria.value;

  try {
    // condicional que checa se tem o pensamento ja tem um id
    if (id) {
      // se tiver altera o pensamento ja existente
      await api.editarPensamento({ id, conteudo, autoria });
    } else {
      // se n tiver adiciona um novo
      // Isso é shorthand do ES6! equivale a: { conteudo: conteudo, autoria: autoria }
      await api.salvarPensamentos({ conteudo, autoria });
    }
    ui.renderizarPensamentos();
  } catch (error) {
    console.log(`Erro main.js - submit: ${error}`);
  }
});

// cancelar a adição/edição de um novo pensamento
btn_cancelar.addEventListener("click", () => {
  // Abordagem para somente resetar campos especificos (chega no mesmo resultado)
  // pensamento_conteudo.value = "";
  // pensamento_autoria.value = "";

  // forma mais moderna e estavel de fazer reset em formularios
  formulario_pensamento.reset(); // .reset() não reseta campos do tipo hidden

  // zera o id
  pensamento_id.value = "";
});
