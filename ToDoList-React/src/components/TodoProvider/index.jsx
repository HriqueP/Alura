import { useEffect, useState } from "react";
import TodoContext from "./TodoContext";

const TODOS = "todos";

export function TodoProvider({ children }) {
  const savedTodos = localStorage.getItem(TODOS);

  const [showDialog, setShowDialog] = useState(false);
  const [todos, setTodos] = useState(savedTodos ? JSON.parse(savedTodos) : []); // Utilizando condicional ternario para preencher o useState com os objetos de ToDos
  const [selectedTodo, setSelectedTodo] = useState();

  const openFormTodoDialog = (todo) => {
    if (todo) {
      setSelectedTodo(todo);
    }
    setShowDialog(true);
  };

  const closeFormTodoDialog = () => {
    setShowDialog(false);
    setSelectedTodo(null);
  };

  useEffect(() => {
    localStorage.setItem(TODOS, JSON.stringify(todos));
  }, [todos]);

  // parametro formData é passado para a função como um objeto nativo que é gerado durante o envio do formulario
  const addTodo = (formData) => {
    const description = formData.get("description");
    console.log("Add novo item ToDo", formData);
    setTodos((prevTodo) => {
      const todo = {
        id: prevTodo.length + 1,
        description: description,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      return [...prevTodo, todo]; // Necessario fazer dessa forma pois o state não é mutavel, aqui estamos passando um array novo para o valor do state e não alterando o valor ja existente
    });
  };

  const toggleTodoCompleted = (todo) => {
    setTodos((prevTodo) => {
      /* .map() é o mais indicado quando queremos apenas modificar o valor de uma prop ao mesmo tempo 
        que queremos manter os demais itens na lista, ja que ele sempre retorna um array do mesmo tamanho
        ideal para atualizar um item especifico
  
        .map() => Modifica um item mantendo todos na lista
      */
      return prevTodo.map((t) => {
        if (t.id === todo.id) {
          // Compara se o id do item recebido como parametro bate com algum do array
          return {
            ...t, // espalha todas as propriedades do item atual (SPREAD do objeto)
            completed: !t.completed, // inverte o valor da prop completed
          };
        }
        return t;
      });
    });
  };

  const editTodo = (formData) => {
    setTodos((prevTodo) => {
      /* .map() é o mais indicado quando queremos apenas modificar o valor de uma prop ao mesmo tempo 
        que queremos manter os demais itens na lista, ja que ele sempre retorna um array do mesmo tamanho
        ideal para atualizar um item especifico
  
        .map() => Modifica um item mantendo todos na lista
      */
      return prevTodo.map((t) => {
        if (t.id === selectedTodo.id) {
          // Compara se o id do item recebido como parametro (selectedTodo) bate com algum do array
          return {
            ...t, // espalha todas as propriedades do item atual (SPREAD do objeto)
            description: formData.get("description"), // altera o valor da descrição
          };
        }
        return t;
      });
    });
  };

  const removeTodo = (todo) => {
    setTodos((prevTodo) => {
      /* .filter() é o mais inficado quando queremos remover um item com base em alguma logica, ele
        roda o array original e retorna os valores que atendem uma condição
  
        .filter() => Remover um item da lista
        */
      return prevTodo.filter((t) => {
        return t.id != todo.id; // Retorna um array em que todos os items tenham o id diferente do item que foi recebido no parametro
      });
    });
  };

  return (
    // Coloca os dados dentro do canal de provider para todos os filhos acessarem
    <TodoContext
      value={{
        todos,
        addTodo,
        toggleTodoCompleted,
        removeTodo,
        showDialog,
        openFormTodoDialog,
        closeFormTodoDialog,
        selectedTodo,
        editTodo,
      }}
    >
      {children}
    </TodoContext>
  );
}
