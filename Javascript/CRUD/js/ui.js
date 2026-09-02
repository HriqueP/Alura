import api from "./api.js";

// lista de pensamentos
const lista_pensamentos = document.getElementById("lista-pensamentos");

// mensagem lista vazia
const mensagem_lista_vazia = document.getElementById("mensagem-vazia");

const ui = {
  async preencherFormulario(id_pensamento) {
    const pensamento = await api.buscarPensamentoPorId(id_pensamento);

    document.getElementById("pensamento-id").value = pensamento.id;
    document.getElementById("pensamento-conteudo").value = pensamento.conteudo;
    document.getElementById("pensamento-autoria").value = pensamento.autoria;
  },

  async renderizarPensamentos() {
    try {
      lista_pensamentos.innerHTML = "";

      // uso de await mesmo que buscarPensamentos() ja retorne o JSON pois a função renderizarPensamentos() tbm é assincrona
      const pensamentos = await api.buscarPensamentos();

      // verificação para mostrar mensagem se a lista estiver vazia
      if (!pensamentos.length) {
        mensagem_lista_vazia.style.display = "block";
      } else {
        pensamentos.forEach((pensamento) => {
          ui.adicionarPensamento(pensamento);
        });
      }
    } catch (error) {
      alert(`Erro ui.js - renderizarPensamentos(): ${error}`);
    }
  },

  adicionarPensamento(pensamento) {
    // criação dos elementos do item da lista
    const li = document.createElement("li");
    const icone_aspas = document.createElement("img");
    const pensamento_conteudo = document.createElement("div");
    const pensamento_autoria = document.createElement("div");
    const div_btns = document.createElement("div");
    const btn_editar_pensamento = document.createElement("button");
    const icone_btn_editar = document.createElement("img");
    const btn_excluir_pensamento = document.createElement("button");
    const icone_btn_excluir = document.createElement("img");

    // definição dos atributos dos elementos do item
    li.setAttribute("data-id", pensamento.id);
    li.classList.add("li-pensamento");

    icone_aspas.src = "./assets/imagens/computador-cabecalho.png";
    icone_aspas.alt = "Aspas Azuis";
    icone_aspas.classList.add("icone-aspas");

    pensamento_conteudo.textContent = pensamento.conteudo;
    pensamento_conteudo.classList.add("pensamento-conteudo");

    pensamento_autoria.textContent = pensamento.autoria;
    pensamento_autoria.classList.add("pensamento-autoria");

    btn_editar_pensamento.classList.add("botao-editar");
    btn_editar_pensamento.onclick = () => {
      ui.preencherFormulario(pensamento.id);
    };

    icone_btn_editar.src = "./assets/imagens/icone-editar.png";
    icone_btn_editar.alt = "Editar";
    btn_editar_pensamento.appendChild(icone_btn_editar);

    btn_excluir_pensamento.classList.add("botao-excluir");
    btn_excluir_pensamento.onclick = async () => {
      try {
        await api.excluirPensamento(pensamento.id);
        ui.renderizarPensamentos();
      } catch (erro) {
        console.log(`Erro ui.js - adicionarPensamento(): ${error}`);
      }
    };

    icone_btn_excluir.src = "./assets/imagens/icone-excluir.png";
    icone_btn_excluir.alt = "Excluir";
    btn_excluir_pensamento.appendChild(icone_btn_excluir);

    div_btns.classList.add("icones");
    div_btns.append(btn_editar_pensamento, btn_excluir_pensamento);

    // adiciona os elementos criados ao item da lista
    li.append(icone_aspas, pensamento_conteudo, pensamento_autoria, div_btns);

    // adiciona o item da lista na lista em si
    lista_pensamentos.appendChild(li);
  },
};

export default ui;
