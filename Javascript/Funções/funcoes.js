/* Expressões de Função 
// Denominando nome da função como "f"
const fatorial = function f(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  return num * f(num - 1); // chamando a função novamente atraves de recursividade
};
console.log(`Resultado Expressão de Função: ${fatorial(5)} \n`);
*/

/* Arrow functions 
const calculaJuros = (valor, juros, tempo) => {
  let taxaJuros = juros / 100 + 1;

  return valor * Math.pow(taxaJuros, tempo); // Utilização da biblioteca do JS para calculo de exponencial Math.pow(base, expoente)
};
console.log(`Resultado Arrow Function: ${calculaJuros(1000, 5, 2)} \n`);
*/

/* Callbacks 
function soma(num1, num2) {
  return num1 + num2;
}

function multiplicacao(num1, num2) {
  return num1 * num2;
}

// Definição da função que chama as outras funções para fazer o calculo
function calcular(operacao, num1, num2) {
  // operacao é uma função sendo passada como parametro para a função mais externa (calcular)
  return operacao(num1, num2); //
}
console.log(`Resultado 1 Callback: ${calcular(soma, 5, 10)} \n`); // Passando apenas a referencia da função "soma" como argumento
console.log(`Resultado 2 Callback: ${calcular(multiplicacao, 5, 10)} \n`); // Passando apenas a referencia da função "multiplicacao" como argumento

const userId = "101010";
// Definição da função de callback para a função de setTimeout()
const avisaUser = (userId) => {
  console.log(`Resultado 3 Callback: Sessão de ${userId} está inativa! \n`);
};
// Passada referencia a função de callback "avisaUser" e passado a paremetro necessário userId da forma que a função de setTimeout define que devem ser passados
setTimeout(avisaUser, 2000, userId);
// Ou tendo toda nossa definição da função de callback definida dentro parametro (apenas uma função de callback anonima)
setTimeout(
  (userId) => {
    console.log(`Resultado 4 Callback: Sessão de ${userId} está inativa!`);
  },
  4000,
  userId,
);
*/

/* Exercicios */
/* Função que recebe nome como parametro e retorna um nome padrao caso não receba nada 

function recebeNome(nome = "Visitante") {
  console.log(`Função de Saudação: Olá ${nome}`);
}

recebeNome();
recebeNome("Henrique");
*/

/* Criar uma função que calcula descontos encima de um valor, com um desconto base de 10% 

function calcularDesconto(valor, desconto = 10) {
  let valorDoDesconto = valor - (valor * desconto) / 100;

  console.log(
    `Função de Calcular Desconto: Valor do item com desconto R$${valorDoDesconto}`,
  );
}

calcularDesconto(100, 50);
calcularDesconto(100);
*/

/* Criar uma arrow function que calcule a media entre o valor de duas notas e a retorne 

const calcularMedia = (nota1, nota2) => {
  return (nota1 + nota2) / 2;
};

console.log(
  `Arrow function Calcular Media: Valor da média: ${calcularMedia(7, 9)}`,
);
*/

/* Criar uma arrow function que retorna a string "Par" se o numero recebido como parametro for par ou "Impar" caso contrario 

const verificarParidade = (numero) => (numero % 2 === 0 ? "Par" : "Impar");
console.log(
  `Arrow function Verificar Paridade: O numero é ${verificarParidade(2)}`,
);
console.log(
  `Arrow function Verificar Paridade: O numero é ${verificarParidade(5)}`,
);
*/

/* Criar uma Arrow funcrion ou função padrão que calcule frete com base em uma distancia 

function calcularFrete(distancia) {
  let valorFrete;

  if (distancia <= 5) {
    return 5;
  } else if (distancia <= 20) {
    return distancia * 0.5;
  } else {
    return 20;
  }
}

console.log(
  `Função Calcular Frete: Valor do frete é R$ ${calcularFrete(4.25)}`,
);
console.log(
  `Função Calcular Frete: Valor do frete é R$ ${calcularFrete(17.3)}`,
);
console.log(
  `Função Calcular Frete: Valor do frete é R$ ${calcularFrete(22.5)}`,
);
*/

/* Criar uma função que receba nome, tipo e uma mensagem personalizada após alguns segundos para o cliente de uma loja 

function processarPedido(nome, tipo, mensagem) {
  setTimeout(mensagem, 2000, nome, tipo);
}

function mensagemPersonalizada(nome, tipo) {
  if (tipo == "vip") {
    console.log(
      `Função Mensagem Personalizada: Obrigado pela preferência, ${nome}! Você ganhou frete grátis.`,
    );
  } else if (tipo == "comum") {
    console.log(
      `Função Mensagem Personalizada: Obrigado pela sua compra, ${nome}!`,
    );
  } else {
    console.log(
      `Função Mensagem Personalizada: Bem-vindo(a), ${nome}! Aproveite um cupom de boas-vindas.`,
    );
  }
}
processarPedido("Henrique", "vip", mensagemPersonalizada);
processarPedido("Albrecht", "comum", mensagemPersonalizada);
processarPedido("Poletti", "novo", mensagemPersonalizada);
 */

/* Criar uma função que receba uma função de callback que é executada após 3 segundos 

function responderUsuario(nome, resposta) {
  console.log("Processando sua pergunta...");
  setTimeout(resposta, 3000, nome);
}

function mostrarResposta(nome) {
  console.log(`Olá, ${nome}! Aqui está a resposta para sua dúvida.`);
}

responderUsuario("Henrique", mostrarResposta);
*/

/* Criar uma função que calcule a pontuação de um jogador e exiba uma mensagem personalida ao final dependendo do total de pontos acumulados 

function avaliarDesempenho(pontuacao, mensagem) {
  let status = "";

  if (pontuacao >= 70) {
    status = "aprovado";
  } else if (pontuacao >= 50 && pontuacao <= 69) {
    status = "reforço";
  } else {
    status = "reprovado";
  }

  mensagem(pontuacao, status);
}

function exibirPontuacao(pontuacao, status) {
  if (status === "aprovado") {
    console.log(
      `Função Avaliar Desempenho: Pontuação: ${pontuacao}, Parabéns! Você foi aprovado!`,
    );
  } else if (status === "reforço") {
    console.log(
      `Função Avaliar Desempenho: Pontuação: ${pontuacao}, Atenção! Você precisa de reforço.`,
    );
  } else {
    console.log(
      `Função Avaliar Desempenho: Pontuação: ${pontuacao}, Infelizmente, você foi reprovado. Tente novamente.`,
    );
  }
}

avaliarDesempenho(82, exibirPontuacao);
avaliarDesempenho(57, exibirPontuacao);
avaliarDesempenho(22, exibirPontuacao);
*/

/* Criar tres função separadas que definem o calculo de consumo de energiar de certos aparelhos eletricos 

function calcularConsumo(potencia, horasPorDia) {
  return (potencia * horasPorDia * 30) / 1000;
}

function classificarConsumo(consumo) {
  if (consumo < 50) {
    return "Baixo Consumo";
  } else if (consumo > 50 && consumo < 199) {
    return "Consumo Moderado";
  } else {
    return "Alto Consumo";
  }
}

function exibirResumoDeConsumo(nomeAparelho, consumo, classificacao) {
  console.log(
    `${nomeAparelho} tem consumo de ${consumo} kWh/mês e é classificada como ${classificacao}.`,
  );
}

const nomeAparelho = "Geladeira";
const consumo = calcularConsumo(150, 4);
const classificacao = classificarConsumo(consumo);
exibirResumoDeConsumo(nomeAparelho, consumo, classificacao);
*/

/* Criar uma função para sortear um nome aleatorio, uma para exibir o sorteado com 2s de atraso, uma para validar a pontuação e uma que organize o fluxo completo do sistema 

const participantes = [
  { nome: "Henrique", pontuacao: 92 },
  { nome: "Albrecht", pontuacao: 67 },
  { nome: "Poletti", pontuacao: 44 },
];

function sortearNome(participantes) {
  const indice = Math.floor(Math.random() * participantes.length);
  return participantes[indice];
}

function exibirSorteado(sorteado) {
  console.log(`Sorteando...`);
  setTimeout(() => {
    console.log(`Participante sorteado: ${sorteado.nome}`);
    console.log(`Pontuação: ${sorteado.pontuacao}`);
    console.log(avaliarPontuacao(sorteado.pontuacao));
  }, 2000);
}

function avaliarPontuacao(pontuacao) {
  if (pontuacao > 80) {
    return `Parabéns, você foi premiado!`;
  } else if (pontuacao > 50 && pontuacao <= 80) {
    return `Você quase conseguiu! Fique de olho nos próximos sorteios.`;
  } else {
    return `Infelizmente, não foi dessa vez.`;
  }
}

function realizarSorteio(participantes) {
  const sorteado = sortearNome(participantes);
  exibirSorteado(sorteado);
}

realizarSorteio(participantes);
*/

/*  Criar uma função que receba um numero inteiro positivo, de print nele e em cada chamada reduza em 1 esse numero, chegando em 0 exiba "Lançado", implementar de forma recursiva 

function contagemRegressiva(numero) {
  if (numero > 0) {
    console.log(numero);
    contagemRegressiva(numero - 1);
  } else {
    console.log("Laçado!");
  }
}

contagemRegressiva(5);
*/
