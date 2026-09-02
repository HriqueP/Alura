console.log("main.js loaded!");

import { mostrarNomes, adicionarNomes } from "./ui.js";
import { buscarNomesPets, salvarNomesPets, editarNomesPets } from "./api.js";

// formulario
const form_pets = document.getElementById("form-pets");

// elementos do formulario
const pet_id = document.getElementById("pet-id");
const pet_nome = document.getElementById("pet-nome");
const pet_especie = document.getElementById("pet-especie");
const pet_raca = document.getElementById("pet-raca");

// btn do formulario
const btn_submit = document.getElementById("enviar");
const btn_cancelar = document.getElementById("cancelar");

// Load da lista assim que a pagina carrega
document.addEventListener("DOMContentLoaded", () => {
  mostrarNomes();
});

// Envia o formulario para adicionar outro pet a lista
form_pets.addEventListener("submit", async (event) => {
  event.preventDefault();

  const id = pet_id.value;
  const nome = pet_nome.value;
  const especie = pet_especie.value;
  const raca = pet_raca.value;

  try {
    if (id) {
      await editarNomesPets({ id, especie, nome, raca });
    } else {
      await salvarNomesPets({ especie, nome, raca });
    }

    mostrarNomes();
  } catch (error) {
    console.log(error);
  }
});

// Cancela envio do novo pet a ser cadastrado
btn_cancelar.addEventListener("click", () => {
  form_pets.reset();
  pet_id.value = "";
});
