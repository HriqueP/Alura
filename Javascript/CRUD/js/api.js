const URL_BASE = "http://localhost:3000";

const api = {
  async buscarPensamentos() {
    try {
      const response = await fetch(`${URL_BASE}/pensamentos`);
      return await response.json();

      /* Logica com o Axios - GET

      const response = await axios.get(`${URL_BASE}/pensamentos`);
      return await response.data;
      */
    } catch (error) {
      alert(`Erro api.js - buscarPensamentos(): ${error}`);
    }
  },

  async buscarPensamentoPorId(id) {
    try {
      const response = await fetch(`${URL_BASE}/pensamentos/${id}`);
      return await response.json();
    } catch (error) {
      alert(`Erro api.js - buscarPensamentoPorId(): ${error}`);
    }
  },

  async salvarPensamentos(pensamento) {
    try {
      const response = await fetch(`${URL_BASE}/pensamentos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pensamento),
      });
      return await response.json();

      /* Logica com o Axios - POST (não é necessario passagem de method, headers e nem body)

      const response = await axios.post(`${URL_BASE}/pensamentos`, pensamento)
      return await response.data;
      */
    } catch (error) {
      alert(`Erro api.js - salvarPensamentos(): ${error}`);
    }
  },

  async editarPensamento(pensamento) {
    try {
      const response = await fetch(`${URL_BASE}/pensamentos/${pensamento.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pensamento),
      });
      return await response.json();

      /* Logica com o Axios - PUT (não é necessario passagem de method, headers e nem body)

      const response = await axios.put(`${URL_BASE}/pensamentos/${pensamento.id}`, pensamento)
      return await response.data;
      */
    } catch (error) {
      alert(`Erro api.js - alterarPensamento(): ${error}`);
    }
  },

  async excluirPensamento(id) {
    try {
      const response = await fetch(`${URL_BASE}/pensamentos/${id}`, {
        method: "DELETE",
      });

      /* Logica com o Axios - DELETE (não é necessario passagem de method)

      const response = await axios.delete(`${URL_BASE}/pensamentos/${id}`)
      */
    } catch (error) {
      alert(`Erro api.js - excluirPensamento(): ${error}`);
    }
  },
};

export default api;
