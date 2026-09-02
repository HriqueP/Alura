/* Exercicio 1 - Calculadora de troco 
console.log("Calculadora de Troco");

let valor_compra = 17.5;
let valor_pago = 20;
let valor_troco = valor_pago - valor_compra;

console.log("Valor do troco: R$", valor_troco);
*/

/* Operador Ternário 
const idade = 18;

// ? -> SE
// : -> SENÃO
idade >= 18 ? console.log("Maior de idade") : console.log("Menor de idade");
*/

/* Truthy e Falsy 
const nome = "";

// Checar se nome tem valor mesmo a estrutura de if estando sem a comparação em si
if (nome) {
  console.log("Olá", nome);
} else {
  console.log("Ainda sem nome");
}
*/

/* Switch Case 
const nota = 3;

switch (nota) {
  case 10:
  case 9:
    console.log("Nota Excelente");
    break;
  case 8:
  case 7:
    console.log("Nota Boa");
    break;
  case 6:
  case 5:
    console.log("Mediano");
    break;
  case 4:
  case 3:
  case 2:
  case 1:
    console.log("Ruim");
    break;
  default:
    console.log("Valor Inválido");
    break;
}
*/

/* Funções 
function saudacao(nome) {
  // nome é um parametro dessa função
  console.log("Olá", nome);
}
saudacao("Poletti"); // Poletti é o argumento passado para essa função
saudacao("Henrique");

// Função com return
function quadradoDeNumero(numero) {
  return numero ** 2;
}
const numero_ao_quadrado = quadradoDeNumero(4);
console.log(numero_ao_quadrado);

// Arrow functions
const mostrarIdade = (idade) => {
  console.log("Idade é ", idade);
};
mostrarIdade(26);

// HOF e Callbacks
// 'calcular' é uma função de ordem grande (HOF)
function calcular(num1, num2, operacao) {
  return operacao(num1, num2);
}

function soma(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

const resultadoOperacao = calcular(3, 8, soma); // 'soma' é uma função de callback (está sendo passada como argumento para a função de calcular)
console.log("Resulado: ", resultadoOperacao);
*/

/* Entrada de terminal 
const readline = require("readline");

const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question("Qual o seu nome ? ", (nome) => {
  console.log("Olá", nome);

  leitor.question("Qual a sua idade ? ", (idade) => {
    if (idade >= 18) {
      console.log(`Com ${idade} anos, vc ja pode beber`);
    } else {
      console.log(`Antes dos ${idade} anos, vc não pode beber`);
    }

    leitor.close();
  });
});
*/

/*
// Quiz de Entrada de Dados
// Import de biblioteca
let acertos = 0;
const readline = require("readline");

// criação da interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// interação com o terminal
rl.question(
  "1) Qual a palavra usamos para criar uma função ? \n (a) define \n (b) function \n (c) create \n ",
  (resposta) => {
    // incrementar acertos quando necessario
    if (resposta === "b") {
      acertos++;
    }

    rl.question(
      "2) Qual dessas é uma estrutura de repetição ? \n (a) loopar \n (b) repeat \n (c) for \n ",
      (resposta) => {
        // incrementar acertos quando necessario
        if (resposta === "c") {
          acertos++;
        }

        rl.question(
          "3) Qual valor é considerado falsy em JS  ? \n (a) 0 \n (b) 1 \n (c) 'texto' \n ",
          (resposta) => {
            // incrementar acertos quando necessario
            if (resposta === "a") {
              acertos++;
            }

            console.log("Total de Acertos: ", acertos);
            if (acertos == 0) {
              console.log("Pessimo desempenho");
            } else if (acertos == 1) {
              console.log("Desempenho ruim");
            } else if (acertos == 2) {
              console.log("Desempenho mediano");
            } else {
              console.log("Otimo desempenho!");
            }

            rl.close();
          }
        );
      }
    );
  }
);
*/

/*
1) Função de saudação
Crie uma função chamada saudacao que exibe a mensagem "Olá! Seja bem-vindo(a)!" ao ser chamada. 

2) Função com parâmetros
Crie uma função chamada saudacao que exibe a mensagem "Olá! Seja bem-vindo(a)!" ao ser chamada. 

3) Cálculo de IMC
Crie uma função que receba peso e altura e retorne o valor do IMC. Mostre também uma frase com o resultado. 

4) Verificar aprovação
Crie uma função verificarAprovacao(nota) que retorna "Aprovado" se nota >= 7 ou "Reprovado" caso contrário.

5) Número par ou ímpar
Crie uma função ehPar(numero) que retorna true se o número for par e false se for ímpar. Teste a função com diferentes valores. 

6) Função soma
Crie uma função que recebe dois números e retorna a soma deles. Exiba o resultado no console com uma frase completa. 

7) Reutilizando código
Reescreva o exercício da calculadora de troco usando uma função calcularTroco(compra, pagamento). 

8) Arrow function
Transforme a função do exercício 6 em uma arrow function com sintaxe reduzida. 

9) Callback simples
Crie uma função executarAcao(acao) que recebe uma função como parâmetro e a executa. Teste passando uma função que imprime "Executando ação!".
 
10) Desafio do quiz
Crie uma função fazerPergunta(pergunta, respostaCorreta). A função deve exibir a pergunta e depois mostrar se a resposta está certa ou errada (simule a resposta com uma variável). 

 */

/* Arrays 

const frutas = ["uva", "banana", "maca", "pera", "morango"];
console.log("Array original:", frutas, "\n");

frutas.push("melancia");
console.log("Array após push:", frutas, "\n");

frutas.pop();
console.log("Array após pop:", frutas, "\n");

frutas.splice(3, 1);
console.log("Array após splice:", frutas, "\n");

// for desaclopado do array, com base somente no length do array
console.log(`Looping array com FOR`);
for (let i = 0; i < frutas.length; i++) {
  console.log("Indice", i, "-", frutas[i]);
}
console.log(`\n`);

// forEach() -> metodo que recebe um callback
console.log(`Looping array com FOREACH`);
frutas.forEach((valor, Indice) => {
  console.log("Indice", Indice, "-", valor);
});
console.log(`\n`);

// for-of
console.log(`Looping array com FOR-OF`);
for (const fruta of frutas) {
  console.log(fruta);
}
console.log(`\n`);

// Métodos mais comuns em arrays
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array numeros original: ", numeros, "\n");

const numerosFiltrados = numeros.filter((numero) => {
  return numero % 2 === 0;
});
console.log("Array numeros filtrados: ", numerosFiltrados, "\n");

const numerosDobrados = numeros.map((numeros) => {
  return numeros * 2;
});
console.log("Array numeros dobrados: ", numerosDobrados, "\n");
*/

/* Objetos 

const pessoa = {
  nome: "Henrique",
  idade: 26,
  temCNH: true,
};

const livro = {
  titulo: "O Hobbit",
  autor: "J. R. R. Tolkien",
  paginas: 350,
};

console.log("Objeto pessoa original: ", pessoa, "\n");

pessoa.sobreNome = "Poletti";
console.log("Objeto pessoa após add prop: ", pessoa, "\n");

delete pessoa.temCNH;
console.log("Objeto pessoa após remover prop", pessoa, "\n");

pessoa.livroFavorito = livro;
console.log("Objeto pessoa após alinhamento: ", pessoa, "\n");

// looping no objeto
for (const chave in pessoa) {
  console.log("Chave:", chave, "- Valor:", pessoa[chave], "\n");
}

// Metodos
const chaves = Object.keys(pessoa);
console.log("Chaves: ", chaves, "\n");

const valores = Object.values(pessoa);
console.log("Valores: ", valores, "\n");

const entradas = Object.entries(pessoa);
console.log("Entradas: ", entradas, "\n");
*/

/*
Exercicios 

5. Função com objeto
Crie uma função que receba um objeto pessoa contendo as propriedades nome, idade e profissao.
A função deve retornar uma frase montada com concatenação de strings, exibindo os dados da pessoa.

const pessoa = {
  nome: "Henrique",
  idade: 26,
  profissao: "astronauta",
};

function saudacaoObj(pessoa) {
  console.log(
    `Olá ${pessoa.nome}, impressionante trabalhar como ${pessoa.profissao} com apenas ${pessoa.idade} anos.`
  );
}

saudacaoObj(pessoa);

6. Lista de pessoas
Crie um array com 3 objetos, cada um representando uma pessoa com nome e idade.

const arrayObj = [
  { nome: "Henrique", idade: 26 },
  { nome: "Albrecht", idade: 30 },
  { nome: "Poletti", idade: 18 },
];

7. Filtrando maiores de idade
Percorra o array e exiba apenas os nomes das pessoas com 18 anos ou mais.

const arrayObj = [
  { nome: "Henrique", idade: 26 },
  { nome: "Albrecht", idade: 12 },
  { nome: "Poletti", idade: 18 },
];

arrayObj.forEach((valor, indice) => {
  if (valor.idade >= 18) {
    console.log(`Item ${indice} - Nome: ${valor.nome} - Idade: ${valor.idade}`);
  }
});

8. Objeto com método
Crie um objeto chamado usuario com as propriedades nome e saudacao.
A propriedade saudacao deve ser uma função que imprime no console uma mensagem fixa, 
utilizando o nome armazenado no objeto por acesso direto à propriedade.

const usuario = {
  nome: "Henrique",
  saudacao: function () {
    console.log("Olá", this.nome);
  },
};

usuario.saudacao();


9. Listando propriedades com for...in
Use um laço for...in para listar todas as propriedades e seus valores do objeto pessoal 
criado no exercício

for (const chaves in pessoa) {
  console.log("Chave:", chaves, "- Valor:", pessoa[chaves]);
}


10. Cálculo de compra
Crie um objeto produto com preco e quantidade, e calcule o valor total da compra(preco * quantidade).

const produto = {
  preco: 12,
  quantidade: 8,
  compra: function () {
    console.log(`Preço da compra ${this.preco * this.quantidade}`);
  },
};

produto.compra();
*/

/* Datas 

const dataAgora = new Date();
console.log("Data Completa:", dataAgora);
console.log("Ano:", dataAgora.getFullYear());

const nascimento = new Date("1999-09-23:18:30.000Z");
console.log("Data formato BR:", nascimento.toLocaleDateString("pt-BR"));

*/

/* REST e Spread 

const pessoa_1 = {
  nome: "Henrique",
  idade: 26,
  profissao: "Desenvolvedor",
};
console.log("pessoa_1:", pessoa_1, "\n");

// Spread
// Forma incorreta de clonar
const pessoa_2_incorreta = pessoa_1; // referencia o mesmo obj de uma const diferente
pessoa_2_incorreta.idade = 80; // altera o valor no obj pesso_1
console.log("pessoa_1:", pessoa_1);
console.log("pessoa_2_incorreta:", pessoa_2_incorreta, "\n");

// Forma correta de clonar (usando Spread Operator) {...objeto_referencia}
const pessoa_2_correta = { ...pessoa_1 };
pessoa_2_correta.idade = 50; // altera o valor da chave idade apenas no objeto pessoa_2_correta
console.log("pessoa_1:", pessoa_1);
console.log("pessoa_2_correta:", pessoa_2_correta, "\n");

// Se quisermos copiar as props de um objeto para o outro (alterando alguma prop ou não)
const pessoa_3 = {
  ...pessoa_2_correta, // copiamos as props de nome, idade e profissao para o pessoa_3
  temCNH: true, // adicionamos uma chave nova apenas no objeto pessoa_3
};
console.log("pessoa_2_correta:", pessoa_2_correta);
console.log("pessoa_3:", pessoa_3, "\n");

// REST
const { profissao, ...restante } = pessoa_1;
console.log("Propriedade 1:", profissao);
console.log("Restante: ", restante);
*/

/* REST e Spread em Arrays 

const frutas = ["maça", "banana", "pera"];

const mais_frutas = ["uva", "manga", "kiwi"];

// podemos clonar arrays da mesma forma como fizemos com os objetos
const clone_array = [...frutas];

frutas.push("melancia");

console.log("Array frutas:", frutas);
console.log("Array mais_frutas:", mais_frutas);
console.log("Array clone:", clone_array);

// merge de arrays
const todas_frutas = [...frutas, ...mais_frutas];
console.log("Array todas_frutas", todas_frutas);

// caso queiramos aplicar o conceito de REST e isolar elementos especificos de um array em variaveis
const [primeira, segunda, ...restante] = todas_frutas;
console.log("Primeiro elemento da separação:", primeira);
console.log("Segundo elemento da separação:", segunda);
console.log("Restante dos elementos:", restante);
*/

/* Destructuring 

const pessoa = {
  nome: "Henrique",
  idade: 26,
  profissao: "Desenvolvedor",
};

const frutas = ["maça", "pera", "uva", "manga"];

// destructuring com objetos
const { nome, idade } = pessoa; // melhor legibilidade
console.log(nome);
console.log(idade);

function saudacao({ profissao }) {
  console.log("Olá, ", profissao);
}
saudacao(pessoa);

// destructuring com arrays
const [primeiro_item, segundo_item] = frutas; // melhor legibilidade
console.log(primeiro_item);
console.log(segundo_item);
*/

/*
Modulos de JS

*/

/*
1. Destructuring em objetos
Crie um objeto com nome, idade e email. Use destructuring para extrair essas 
informações em variáveis separadas.

const pessoa = {
  nome: "Henrique",
  idade: 26,
  email: "hapoletti@gmail.com",
};

const { nome, email } = pessoa;
console.log(nome, email);

2. Destructuring em arrays
Crie um array com 3 linguagens de programação. Use destructuring para criar 
variáveis ling1, ling2 e ling3.

const array_itens = ["JavaScript", "Python", "C#"];

const [ling_1, ling_2, ling_3] = array_itens;
console.log(ling_1, ling_2, ling_3);

3. Rest operator em função
Crie uma função que receba vários números como parâmetros usando o operador rest (...).
Utilize um laço for para somar todos os valores recebidos e retorne o total.

function somaTudo(...nums) {
  let soma = 0;

  for (let i = 0; i < nums.length; i++) {
    soma += nums[i];
  }

  return soma;
}

console.log("Soma:", somaTudo(1, 2, 3, 4)); // 10

4. Spread operator com arrays
Crie dois arrays de frutas e combine-os usando o operador spread.

const frutas_1 = ["Maça", "Banana"];
const frutas_2 = ["Perâ", "Kiwi"];

const combinacao_frutas = [...frutas_1, ...frutas_2];

console.log(combinacao_frutas);

5. Spread operator com objetos
Crie dois objetos: um com nome e outro com idade. Combine-os em um terceiro objeto usando spread.

const dados_pessoais = {
  nome: "Henrique",
  idade: 26,
};
const caracteristicas = {
  temCNH: true,
  profissao: "Desenvolvedor",
};

const pessoa = { ...dados_pessoais, ...caracteristicas };

console.log(pessoa);

6. Função com parâmetro default
Crie uma função que recebe um nome e imprime "Olá, [nome]". Se o nome não for 
passado, use "visitante" como valor padrão.

function saudacao(nome = "Visitante") {
  console.log("Olá", nome);
}

saudacao("Poletti");
saudacao();

7. Trabalhando com datas
Crie uma variável com a data atual e exiba o dia, mês e ano formatados.

const dia_atual = new Date();
console.log("localeDate:", dia_atual.toLocaleDateString());

8. Modularização com export/import
Crie uma função simples chamada somar(a, b) e exporte-a como módulo (modo CommonJS ou ES Modules, dependendo do ambiente).

9. Objeto com função construtora
Crie uma função construtora chamada Livro que receba titulo e autor como 
parâmetros e os armazene em propriedades do objeto.
Em seguida, crie dois objetos Livro usando essa função.

10. Método no objeto
Adicione à função construtora Livro uma função chamada descrever, 
que retorna uma frase com o título e o autor do livro, usando concatenação de strings.

*/
