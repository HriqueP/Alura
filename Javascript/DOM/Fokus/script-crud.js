console.log("-- Script Crud Loaded --");

// ul de Tarefas
const ul_tarefas = document.querySelector(".app__section-task-list");

// Botoes
const btn_adicionar_tarefa = document.querySelector(".app__button--add-task");
const btn_cancelar_tarefa = document.querySelector(
  ".app__form-footer__button--cancel",
);
const btn_remover_concluidas = document.getElementById(
  "btn-remover-concluidas",
);
const btn_remover_todas = document.getElementById("btn-remover-todas");

// Formulario
const form_adiconar_tarefa = document.querySelector(".app__form-add-task");

// Paragrafo da task ativa
const paragrafo_descricao_tarefa = document.querySelector(
  ".app__section-active-task-description",
);

// Textarea do formulario
const textarea_tarefa = document.querySelector(".app__form-textarea");

// Lista de tarefas (com programação defensiva caso a lista de tarefas esteja vazia)
let lista_tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

// Tarefa selecionada e elemento da tarefa
let tarefa_selecionada = null;
let li_tarefa_selecionada = null;

// Atualizar tarefas quando editadas
function atualizarTarefas() {
  localStorage.setItem("tarefas", JSON.stringify(lista_tarefas));
}

// Limpar textArea e fechar formulario
function limparFecharForm() {
  textarea_tarefa.value = "";
  form_adiconar_tarefa.classList.toggle("hidden");
}

function criarElementoTarefa(tarefa) {
  const li = document.createElement("li");
  li.classList.add("app__section-task-list-item");

  const svg = document.createElement("svg");
  svg.innerHTML = `
    <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
      <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
    </svg>`;

  const paragrafo = document.createElement("p");
  paragrafo.classList.add("app__section-task-list-item-description");
  paragrafo.textContent = tarefa.descricao;

  const botao = document.createElement("button");
  botao.classList.add("app_button-edit");

  botao.onclick = () => {
    const nova_descricao = prompt("Qual o novo nome da tarefa ?");

    // Verifica se a nova descrição tem algum valor
    console.log(nova_descricao);
    if (nova_descricao) {
      // Atualiza texto no paragrafo da lista de tarefas
      paragrafo.textContent = nova_descricao;

      // Altera os valores e chama a função para atualizar no localStorage
      tarefa.descricao = nova_descricao;
      atualizarTarefas();
    } else {
      console.log("Digite algum valor");
    }
  };

  const img_botao = document.createElement("img");
  img_botao.setAttribute("src", "./imagens/edit.png");

  botao.append(img_botao);
  li.append(svg);
  li.append(paragrafo);
  li.append(botao);

  if (tarefa.completa) {
    li.classList.add("app__section-task-list-item-complete");
    botao.setAttribute("disabled", "disabled");
  } else {
    li.onclick = () => {
      document
        .querySelectorAll(".app__section-task-list-item-active")
        .forEach((elemento) => {
          elemento.classList.remove("app__section-task-list-item-active");
        });
      if (tarefa_selecionada == tarefa) {
        paragrafo_descricao_tarefa.textContent = "";
        tarefa_selecionada = null;
        li_tarefa_selecionada = null;
        return;
      }
      tarefa_selecionada = tarefa;
      li_tarefa_selecionada = li;
      paragrafo_descricao_tarefa.textContent = tarefa.descricao;

      li.classList.add("app__section-task-list-item-active");
    };
  }

  return li;
}

btn_adicionar_tarefa.addEventListener("click", () => {
  form_adiconar_tarefa.classList.toggle("hidden");
});

form_adiconar_tarefa.addEventListener("submit", (evento) => {
  evento.preventDefault(); // Previne comportamento padrão de um componente HTML
  const tarefa = {
    descricao: textarea_tarefa.value,
  };
  lista_tarefas.push(tarefa);
  const elemento_criado = criarElementoTarefa(tarefa);
  ul_tarefas.append(elemento_criado);

  atualizarTarefas();

  limparFecharForm();
});

btn_cancelar_tarefa.addEventListener("click", limparFecharForm);

// Carrega lista de tarefas quando a pagina é carregada
lista_tarefas.forEach((elemento) => {
  const elemento_criado = criarElementoTarefa(elemento);
  ul_tarefas.append(elemento_criado);
});

// Listener do evento customizado
document.addEventListener("FocoFinalizado", () => {
  if (tarefa_selecionada && li_tarefa_selecionada) {
    li_tarefa_selecionada.classList.remove(
      "app__section-task-list-item-active",
    );
    li_tarefa_selecionada.classList.add("app__section-task-list-item-complete");
    li_tarefa_selecionada
      .querySelector("button")
      .setAttribute("disabled", "disabled");
  }
  tarefa_selecionada.completa = true;
  atualizarTarefas();
});

btn_remover_concluidas.addEventListener("click", () => {
  console.log("Remover Concluidas");

  const seletor_completas = ".app__section-task-list-item-complete";
  document.querySelectorAll(seletor_completas).forEach((elemento) => {
    elemento.remove();
  });
  lista_tarefas = lista_tarefas.filter((tarefa) => !tarefa.completa);
  atualizarTarefas();
});

btn_remover_todas.addEventListener("click", () => {
  console.log("Remover Todas");

  const seletor_todas = ".app__section-task-list-item";
  document.querySelectorAll(seletor_todas).forEach((elemento) => {
    elemento.remove();
  });

  lista_tarefas.length = 0;
  atualizarTarefas();
});
