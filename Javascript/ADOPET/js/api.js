console.log("api.js loaded!");

const URL_BASE = "http://localhost:3000";

export async function buscarNomesPets() {
  try {
    const response = await fetch(`${URL_BASE}/pets`);

    const dados = await response.json();

    return dados;
  } catch (error) {
    console.log(`Erro api.js: ${error}`);
  }
}

export async function buscarNomesPetsPorID(id) {
  try {
    const response = await fetch(`${URL_BASE}/pets/${id}`);

    const dados = await response.json();

    return dados;
  } catch (error) {
    console.log(`Erro api.js: ${error}`);
  }
}

export async function salvarNomesPets(pet) {
  try {
    const response = await fetch(`${URL_BASE}/pets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pet),
    });

    const dados = await response.json();

    return dados;
  } catch (error) {
    console.log(`Erro api.js: ${error}`);
  }
}

export async function editarNomesPets(pet) {
  try {
    const response = await fetch(`${URL_BASE}/pets/${pet.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pet),
    });

    const dados = await response.json();

    return dados;
  } catch (error) {
    console.log(`Erro api.js: ${error}`);
  }
}

export async function deletarNomesPets(id_pet) {
  try {
    const response = await fetch(`${URL_BASE}/pets/${id_pet}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(`Erro api.js: ${error}`);
  }
}
