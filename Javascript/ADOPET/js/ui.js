console.log("ui.js loaded!");

import {
  buscarNomesPets,
  salvarNomesPets,
  buscarNomesPetsPorID,
  deletarNomesPets,
} from "./api.js";

const lista_pets = document.getElementById("lista-pets");

export async function preencherFormularioPets(id_pet) {
  const pet = await buscarNomesPetsPorID(id_pet);

  document.getElementById("pet-id").value = pet.id;
  document.getElementById("pet-nome").value = pet.nome;
  document.getElementById("pet-especie").value = pet.especie;
  document.getElementById("pet-raca").value = pet.raca;
}

export async function mostrarNomes() {
  try {
    lista_pets.innerHTML = "";

    const pets = await buscarNomesPets();

    pets.forEach((pet) => {
      adicionarNomes(pet);
    });
  } catch (error) {
    console.log(error);
  }
}

export async function adicionarNomes(pet) {
  // criacao dos elementos
  const li = document.createElement("li");
  const p = document.createElement("p");
  const btn_editar = document.createElement("button");
  const btn_excluir = document.createElement("button");

  // atributos dos elementos dos itens da lista
  li.setAttribute("pet-id", pet.id);

  p.setAttribute("id", "info-pet");
  p.textContent = `Nome: ${pet.nome} - Especie: ${pet.especie} - Raça: ${pet.raca}`;

  btn_editar.textContent = "Editar";
  btn_editar.onclick = () => {
    preencherFormularioPets(pet.id);
  };

  btn_excluir.textContent = "Apagar";
  btn_excluir.onclick = () => {
    console.log(pet.id);
    deletarNomesPets(pet.id);
  };

  // adicao dos elementos no item da lista
  li.append(p, btn_editar, btn_excluir);

  // adição do item na lista em si
  lista_pets.appendChild(li);
}
