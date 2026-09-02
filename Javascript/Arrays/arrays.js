/* Arrays 

// Array inicial
const arr = [1, 2, 3, 4];
console.log(arr);

// Indice 0 alterado
arr[0] = 10;
console.log(arr);

// Indice 5 criado (pulando 4)
arr[5] = 100;
console.log(arr);
*/

/* Array - for 

// Array incial
const arr = [1, 2, 3, 4, 5];

// Looping com for
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Alterando valores com o looping
for (let i = 0; i < arr.length; i++) {
  arr[i] *= 10;
  console.log(arr[i]);
}
*/

/* Array - for / of 

// Array inicial
const arr = [1, 2, 3, 4, 5];

for (let numero of arr) {
  console.log(numero);
}
*/

/* Métodos de Arrays 
const arr = [1, 2, 3, 4, 5];

// Inserir no fim do array
arr.push(6);
console.log(arr);

// Eliminar do final
arr.pop();
console.log(arr);

// Verificar se existe elemento no array e retona o indice dele
const elem = arr.indexOf(5);
console.log(elem);

// Pega um pedaço do array a partir de um indice, ou até um outro indice e retona um novo array
const arrSlice = arr.slice(3);
console.log(arrSlice);
*/

/* Métodos de Arrays - Callbacks
Todos os métodos de callback tem 2 paramentros:
  - Primeiro é o elemento do array
  - Segundo é o indice em que ele se encontra

const arr = [1, 2, 3, 4, 5];

// Percorre todo o array e utiliza função de callback para executar um codigo, retonar um novo array na variavel definida
const arrCalculado = arr.map((elemento) => {
  return elemento * 10;
});
console.log(arrCalculado);

// Executa um laço de repetição por todo o array sem retornar nada
arr.forEach((elemento, indice) => {
  console.log(`Numero ${elemento} está no indice ${indice}`);
});

// Percorre todo o array e o filtra retornando um novo array baseado em uma condição
const arrFilter = arr.filter((elemento) => {
  return elemento % 2 === 0;
});
console.log(arrFilter);
*/

/* Exercicios */
/* Criar um array com uma sequencia entre os numeros x e y 

const arr = [];

function criarArr(inicio, fim) {
  let elemento = inicio;

  for (let i = 0, j = 0; j < fim; i++, elemento++) {
    arr[i] = elemento;
    j = elemento;
  }
}

criarArr(5, 10);
console.log(arr);

criarArr(2, 26);
console.log(arr);
*/

/* Clonar um arrau multidimensional com "deep copy" 

const arr1 = [[1, 2], 2, 3, 4, 5];

const copiaArray = (arr) => {
  const copia = [];

  arr.forEach((elemento, indice) => {
    // Array.isArray -> Função nativa que checa se um elemento é um array
    if (Array.isArray(elemento)) {
      copia.push(copiaArray(elemento));
    } else {
      copia.push(elemento);
    }
  });

  return copia;
};

const arr2 = copiaArray(arr1);

console.log(`Array 1`);
arr1[0][0] = 10;
console.log(arr1);

console.log(`Array 2`);
console.log(arr2);
*/

/* Filtrar um array e alterar valores especificos (alterar numeros para string) 

const arr = ["12345", "67890", 101112, "131415", 161718];

const arr2 = arr.map((elemento) => {
  if (typeof elemento == "string") {
    return elemento;
  } else {
    return elemento.toString();
  }
});
console.log(arr2);

// OU na versão mais reduzida

const arr3 = arr.map((elemento) =>
  typeof elemento == "string" ? elemento : elemento.toString(),
);
console.log(arr3);
*/

/* Crie um array com itens de uma lista, acesse o segundo item e modifique o ultimo 

const arr = ["arroz", "feijão", "macarrão", "tomate"];

console.log(arr[1]);

arr[arr.length - 1] = "Melancia";
console.log(arr);
*/

/* Crie um array com valores e use um loop for para somar os valores desse array e exibir o total 

const despesas = [120, 80, 45.5, 200, 60];
let valor_total = 0;

for (let i = 0; i < despesas.length; i++) {
  valor_total += despesas[i];
}

console.log(`Valor Total: R$${valor_total}`);
*/

/* Crie um array com nomes e use for - of para exibir cada um individualmente 

const nomes = ["Carla", "João", "Marina", "Lucas", "Beatriz"];

for (const nome of nomes) {
  console.log(nome);
}
*/

/* Crie um array com uma lista e use forEach() para exibir uma mensagem para cada item da lista 

const mensagens = [
  "Pedido confirmado",
  "Pagamento aprovado",
  "Produto enviado",
];

mensagens.forEach((elemento) => {
  console.log(elemento);
});
*/

/* Crie um array com 3 elementos iniciais, adicione um item no final da lista, remova o ultimo item da lista e exiba a lista apos cada operacao 

const tarefas = ["Estudar", "Lavar roupa", "Fazer compras"];

console.log(tarefas);

tarefas.push("Estudar programação");
console.log(tarefas);

tarefas.pop();
console.log(tarefas);
*/

/* Crie um array com alguns itens, faça uma copia do array, adicione um item apenas a copia do array e exiba ambos para mostras a diferença 

const pedidos = ["camiseta", "calça", "tênis"];

const pedidos_copia = pedidos.slice();

pedidos_copia.push("moletom");

console.log(pedidos);
console.log(pedidos_copia);
*/

/* Crie um array com itens, crie uma variavel com o valor de um dos itens, verifique se o item esta na lista e exiba uma mensagem quando o item for encontrado 

const livros = ["Dom Casmurro", "O Cortiço", "Capitães da Areia", "Iracema"];
const livro_procurado = "Capitães da Areia";

if (livros.indexOf(livro_procurado) !== -1) {
  console.log(`Livro ${livro_procurado} está disponivel!`);
} else {
  console.log(`Livro ${livro_procurado} não está disponivel`);
}
*/

/* Crie um array com valores, use o metodo map() para aplicar 10% de desconto em cada valor e exiba o novo array com os valores atualizados 

const precos = [100, 80, 50, 120];

const precos_novos = precos.map((elemento) => {
  return elemento * 0.9;
});

console.log(precos_novos);
*/

/* Crie um array contendo uma lista de objetos, use o metodo filter() para selecionar somente com uma chave com valor acima de X e exibir a mensagem para cada um, use o metodo map() para criar um novo array com apenas os valores que passaram exiba a lista final 

const participantes = [
  { nome: "Ana", idade: 17 },
  { nome: "Bruno", idade: 22 },
  { nome: "Carla", idade: 19 },
  { nome: "Daniel", idade: 15 },
  { nome: "Eduarda", idade: 25 },
];

const arrayLiberados = participantes.filter((elemento, index) => {
  if (elemento.idade >= 18) {
    console.log(`Acesso Liberado para: ${elemento.nome}`);
    return elemento;
  }
});

const arrayAutorizados = arrayLiberados.map((elemento, index) => {
  return elemento.nome;
});
console.log(arrayAutorizados);
*/

/* Crie um array que mostre os dados de uma lista de objetos, filtre os que estiverem acima com uma chave acima de um certo valor e mostre seus valores, calcule o total da multiplicação entre os valores de duas chaves e exiba os dados do que tiver o valor dessa multiplicação mais alta 

const produtos = [
  { nome: "Notebook", preco: 2500, quantidadeVendida: 75 },
  { nome: "Mouse", preco: 100, quantidadeVendida: 180 },
  { nome: "Teclado", preco: 150, quantidadeVendida: 125 },
  { nome: "Monitor", preco: 900, quantidadeVendida: 95 },
];

let produtos_relatorio = "";
let produtos_top_vendas = "";
let produtos_vendas_totais = "";
let mais_lucrativo = { nome: "", totalVendas: 0 };

produtos.forEach((elemento, index) => {
  let total_vendas = elemento.preco * elemento.quantidadeVendida;

  produtos_relatorio += `Produto: ${elemento.nome} - Preço ${elemento.preco} - Quantidade vendida: ${elemento.quantidadeVendida}\n`;

  if (elemento.quantidadeVendida > 100) {
    produtos_top_vendas += `${elemento.nome} \n`;
  }

  produtos_vendas_totais += `${elemento.nome}: R$ ${total_vendas.toFixed(2)} \n`;

  if (total_vendas > mais_lucrativo.totalVendas) {
    mais_lucrativo.nome = elemento.nome;
    mais_lucrativo.totalVendas = total_vendas;
  }
});

console.log(`Relatório de produtos vendidos:`);
console.log(produtos_relatorio);

console.log(`Produtos com alto volume de vendas (> 100 unidades):`);
console.log(produtos_top_vendas);

console.log(`Total de vendas por produto:`);
console.log(produtos_vendas_totais);

console.log(`Produto mais lucrativo:`);
console.log(mais_lucrativo);
*/
