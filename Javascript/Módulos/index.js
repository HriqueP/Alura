/*
Aqui não podemos utilizar a forma com o require para utilizar o readline 
uma vez que definimos no package o uso de modulos
*/
import { createInterface } from "readline";

/*
Para fazer o import das funções das operações matematicas definidas no arquivo JS
utilizamos o destructor para indicar para o Node de onde essas funções estão vindo
*/
import { soma, subtracao } from "./operacoes_matematicas.js";

const leitor = createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question("Digite o primeiro numero: ", (numero_1) => {
  leitor.question("Digite o tipo de operacao: ", (operacao) => {
    leitor.question("Digite o primeiro numero: ", (numero_2) => {
      // Number() transforma a string recebida em numero_1 e numero_1 em um numero de fato
      const num_1 = Number(numero_1);
      const num_2 = Number(numero_2);

      let result = null;

      if (operacao == "+") {
        result = soma(num_1, num_2);
      } else if (operacao == "-") {
        result = subtracao(num_1, num_2);
      } else {
        console.log("Operação Inválida");
      }

      if (result != null) {
        console.log("Resultado igual a: ", result);
      }

      leitor.close();
    });
  });
});
