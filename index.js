console.log("Hello world!");

/* Função tradicional para dobrar um número */
function dobrar(numero) {
    return numero * 2;
  }


/* Função anônima atribuída a uma variável para dobrar um número */
const dobrar = function(numero) {
    return numero * 2;
  };
  

/* Função de seta (arrow function) para dobrar um número */
const dobrar = numero => numero * 2;


/* Função de saudação usando função de seta */
const saudacao = nome => `Olá, ${nome}!`;


/* Função tradicional de saudação */
function saudacao(nome) {
    return "Olá, " + nome + "!";
  }
  

/* Função tradicional para somar números */
function somarNumeros() {
    let soma = 0;
    for (let i = 0; i < arguments.length; i++) {
      soma += arguments[i];
    }
    return soma;
  }
  
/* Função de seta para somar números */
const somarNumeros = (...numeros) => numeros.reduce((acc, num) => acc + num, 0);

/* Função de saudação que retorna "Olá, [nome]" */
function saudacao(nome) {
    return `Olá, ${nome}!`;
  }
  

/* Função para encontrar o maior número entre três números */
function maiorNumero(num1, num2, num3) {
    return Math.max(num1, num2, num3);
  }
  

/* Função para contar as vogais em uma string */
function contarVogais(string) {
    const vogais = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      if (vogais.includes(string[i])) {
        count++;
      }
    }
    return count;
  }
  
  // Função para calcular a média de um array de números:
  function calcularMedia(numeros) {
    if (numeros.length === 0) {
      return 0;
    }
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    return soma / numeros.length;
  }
  


