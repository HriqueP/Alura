/* Métodos Internos de Objetos 

const pessoa = {
  nome: "Henrique Poletti",
  score: 5200,
  trofeus: ["Kung fu", "Bravus"],
  alistado: false,
  saudarUsuario: function () {
    console.log(`Bem vindo ${this.nome}! \n`);
  },
  listarScore() {
    console.log(`Seu score é de: ${this.score} pontos \n`);
  },
};

pessoa.saudarUsuario();
pessoa.listarScore();

// Adicionar método a um obj que ja existe
pessoa.listarTrofeus = function listarTrofeus() {
  console.log(`Seus troféus são: `);
  for (const item of this.trofeus) {
    console.log(item);
  }
};
pessoa.listarTrofeus();
*/

/* Métodos de Objetos 

const user = {
  nome: "Henrique Poletti",
  score: 5200,
  trofeus: ["Kung fu", "Bravus"],
  alistado: false,
};

// Retornar em um array todas as chaves de um objetos
console.log(Object.keys(user));

// Retornar em um array todos os valores das chaves de um objetos
console.log(Object.values(user));

// Retornar em um array bidimensional todos os conjuntos de chaves e valores de um objetos
console.log(Object.entries(user));

// Método de iteração exclusivo para objetos (por não serem ordenados)
for (const chave in user) {
  console.log(
    `Chave: ${chave} - Valor: ${user[chave]} - Typeof: ${typeof user[chave]}`,
  );
}
*/

/* Exercicios */
/* Criar um objeto pessoa, mostrar no terminal seu nome e um dos trofeus, excluir uma de suas propriedades, criar uma função para iterar entre a lista de trofeus 

const pessoa = {
  nome: "Henrique Poletti",
  nascimento: "1999-09-23",
  cpf: "48994613803",
  score: 5200,
  trofeus: ["Kung fu", "Bravus"],
};

console.log(`${pessoa.nome} campeão da ${pessoa.trofeus[1]} 2025 \n`);

delete pessoa.cpf;
console.log(pessoa);

function exibeTrofeus(objeto) {
  for (const item of objeto.trofeus) {
    console.log(item);
  }
}
exibeTrofeus(pessoa);
*/

/* Criar um objeto e adicionar a ele um método para calcular a idade da pessoa e retornar o valor no terminal 

const user = {
  nome: "Henrique Poletti",
  nascimento: "1999-09-23",
  cpf: "48994613803",
  score: 5200,
  trofeus: ["Kung fu", "Bravus"],
};

user.calcularIdade = function calcularIdade() {
  let nascimento = this.nascimento.split("-");
  let data_de_hoje = new Date().getFullYear();
  let idade = data_de_hoje - parseInt(nascimento[0]);

  return idade;
};

console.log(user.calcularIdade());
*/

/* Acesse um array de objeto e imprima o nome e status de cada um 

const users = [
  {
    nome: "Henrique",
    ativo: true,
  },
  {
    nome: "Albrecht",
    ativo: false,
  },
  {
    nome: "Poletti",
    ativo: true,
  },
  {
    nome: "DreamyDS",
    ativo: true,
  },
];

for (const user of users) {
  console.log(
    `Usuário ${user.nome} esta com o status: ${user.ativo ? "Ativo" : "Inativo"} `,
  );
}
*/

/* Crie um objeto com tres chaves de informações e as imprima no console 

const produto = {
  nome: "Produto X",
  preco: 230,
  disponivel: true,
  mostrarInfos: function () {
    console.log(
      `O produto: ${this.nome} de R$${this.preco} está ${this.disponivel ? "Disponivel" : "Indisponivel"}`,
    );
  },
};

produto.mostrarInfos();
*/

/* Crie um objeto e acesse os valores de suas propriedades utilizando notação de ponto e de colchetes 

const configuracoes = {
  tema: "Ação",
  notificacoes: true,
  idioma: "Portugues",
};

console.log(configuracoes.tema);
console.log(configuracoes["idioma"]);
*/

/* Crie um objeto que tenha um array com no minimo 5 elementos como valores de uma de suas chaves, acesse o segundo indice desse array e exiba no console 

const receita = {
  nome: "Bife Wellington",
  ingredientes: ["File Mignion", "Farinha", "Manteiga", "Agua", "Sal"],
  tempoPreparo: "1 hora",
};

console.log(`Ingrediente Complementar: ${receita.ingredientes[2]}`);
*/

/* Crie um objeto com 4 propriedades, retire uma e mostre no console o resultado 

const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
  modeloAntigo: "Corolla XEi",
};

console.log(carro);

delete carro.modeloAntigo;

console.log(carro);
*/

/* Crie um array com 3 objetos dentro, cada objeto possuindo duas propriedades, use um looping para exibir no console o valor de cada uma das chaves dos objetos 

const dispositivos = [
  {
    nome: "Impressora",
    status: true,
  },
  {
    nome: "Scanner",
    status: false,
  },
  {
    nome: "Drive",
    status: true,
  },
];

for (const objeto of dispositivos) {
  console.log(
    `${objeto.nome}  Status: ${objeto.status ? "Online" : "Offline"}`,
  );
}
*/

/* Crie um objeto com duas propriedades, adicione um metodo que exiba no console o valor das duas propriedades ja existentes 

const maquina = {
  nome: "Esteira Transportadora",
  funcionando: true,
  exibirStatus: function () {
    console.log(
      `${this.funcionando ? `A máquina: ${this.nome} está em funcionamento` : `A maquina ${this.nome} está parada`} `,
    );
  },
};

maquina.exibirStatus();
*/

/* Um arrays de arrays, em que os valores formam um conjunto de chaves e valores é necessario fazer a conversão desses valores para formar um objeto completo com esses valores 

const arr = [
  ["nome", "João"],
  ["idade", 30],
  ["cidade", "Curitiba"],
];

const user = {};

arr.forEach(([chave, valor], indice) => {
  user[chave] = valor;
});

console.log(user);
*/

/* Crie um objeto e exiba todas as informações de chave e valor no console, utilize um metodo definido para calcular um valor baseado em dois outros valores da chave, exiba uma mensagem diferente baseada no resultado 

const relatorio = {
  temperatura: 75,
  vibracao: 40,
  pressao: 55,
  nivelRuido: 30,
};

const categorias = Object.keys(relatorio);
console.log(categorias);

const valores_registrado = Object.values(relatorio);
console.log(valores_registrado);

console.log("Detalhamento");
// Object.entries -> Retorna um array de arraysqye formam pares [chave, valor] que nos permite iterar com o looping for-of
for (const [chave, valor] of Object.entries(relatorio)) {
  if (valor > 50) {
    console.log(`${chave}: ${valor} (alerta)`);
  } else {
    console.log(`${chave}: ${valor} (ok)`);
  }
}
*/

/* Crie um objeto que verifique quais chaves não tem o valor 0, o valor somado das chaves que são maior que 0, um alerta caso esse numero seja maior que 20 e um caso seja menor  

const manutencao = {
  jan: 2,
  fev: 0,
  mar: 5,
  abr: 4,
  mai: 0,
  jun: 7,
};

let dias_manutencoes = 0;
let meses_manutencoes = 0;
let limite_manutenções = 20;

for (const [chave, valor] of Object.entries(manutencao)) {
  if (valor > 0) {
    dias_manutencoes += valor;
    meses_manutencoes++;
  }
}

console.log(`Total de dias perdidos: ${dias_manutencoes}`);
console.log(`Meses com manutenção registradas: ${meses_manutencoes}`);

if (dias_manutencoes > 20) {
  console.log(`Status: Atenção! Acima do limite anual`);
} else {
  console.log(`Status: Dentro do limite anual`);
}
*/

/* Crie um objeto em que suas chaves são: um valor, um array de objetos com mais duas chaves dentro e um metodo. O metodo deve percorrer o array e mostrar suas chaves e uma mensagem com base no valor de uma delas, ao final mostrar o total de pares chaves e valores do array de objetos e um valor de media entre esses valores 

const curso = {
  titulo: "JavaScript Intermediário",
  estudantes: [
    { nome: "Ana", progresso: 85 },
    { nome: "Carlos", progresso: 40 },
    { nome: "Juliana", progresso: 72 },
    { nome: "Pedro", progresso: 60 },
  ],
};

curso.gerarRelatorio = function gerarRelatorio() {
  let totalProgresso = 0;
  let mediaGeral = 0;

  for (let i = 0; i < this.estudantes.length; i++) {
    if (this.estudantes[i].progresso >= 70) {
      console.log(
        `Estudante: ${this.estudantes[i].nome} | Progresso: ${this.estudantes[i].progresso}% | Situação: Aprovado`,
      );
    } else {
      console.log(
        `Estudante: ${this.estudantes[i].nome} | Progresso: ${this.estudantes[i].progresso}% | Situação: Em Andamento`,
      );
    }

    totalProgresso += this.estudantes[i].progresso;
  }

  mediaGeral = totalProgresso / this.estudantes.length;

  console.log(`Total de Estudantes: ${this.estudantes.length}`);
  console.log(`Média Geral da Turma: ${mediaGeral}%`);
};

curso.gerarRelatorio();
*/
