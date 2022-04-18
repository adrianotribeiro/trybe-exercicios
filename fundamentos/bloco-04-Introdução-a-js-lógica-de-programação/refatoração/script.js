// 1 - Faça cinco programas, um para cada operação aritmética básica.
// Seu programa deve ter duas constantes, a e b , definidas no começo
// com os valores que serão operados. Faça programas para:
function somar(a, b) {
  return a + b;
}
function subtrair(a, b) {
  return a - b;
}
function multiplicar(a, b) {
  return a * b;
}
function dividir(a, b) {
  return a / b;
}
function modulo(a, b) {
  return a % b;
}
function calculadora(operacao, numA, numB) {
  let resultado;
  if (operacao === "+") {
    resultado = somar(numA, numB);
  } else if (operacao === "-") {
    resultado = subtrair(numA, numB);
  } else if (operacao === "*") {
    resultado = multiplicar(numA, numB);
  } else if (operacao === "/") {
    resultado = dividir(numA, numB);
  } else if (operacao === "%") {
    resultado = modulo(numA, numB);
  } else {
    return "Operador desconhecido";
  }
  return resultado;
}

console.log(calculadora("*", 3, 2));
console.log("");
// 2 - Faça um programa que retorne o maior de dois números.
// Defina no começo do programa duas constantes com os valores que serão comparados.
function bigNumber(numA, numB) {
  if (numA > numB) {
    return "O valor: " + numA + " é o maior valor.";
  } else if (numA < numB) {
    return "O valor: " + numB + " é o maior valor.";
  }
}
console.log(bigNumber(5, 6));

// 3 - Faça um programa que retorne o maior de três números.
// Defina no começo do programa três constantes com os valores que serão comparados.

function maiorQue(numA, numB, numC) {
  if (numA > numB && numA > numC) {
    return "O valor: " + numA + " é o maior valor";
  } else if (numB > numA && numB > numC) {
    return "O valor: " + numB + " é o maior valor";
  } else if (numC > numA && numC > numB) {
    return "O valor: " + numC + " é o maior valor";
  }
}
console.log(maiorQue(32, 99, 100));
console.log("");

// 4 - Faça um programa que, dado um valor definido numa constante,
// retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
function positiveVerification(num) {
  if (num > 0) {
    return "positive";
  } else if (num < 0 || num === 0) {
    return "negative";
  }
}
const valor = 0;
console.log(positiveVerification(valor));
console.log();

// 5 - Faça um programa que defina três constantes com os valores dos três ângulos internos
// de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e
// false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

function triangleCalc(AngleA, AngleB, AngleC) {
  let soma = AngleA + AngleB + AngleC;
  if (soma === 180) {
    return true;
  } else if (soma > 180) {
    return false;
  }
  return false;
}

console.log(triangleCalc(60, 60, 60));
console.log("");

//6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os
// movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto
//  com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)
function chessPiece(piece) {
  switch (piece.toLowerCase()) {
    case "rei":
      return "O Rei se movimenta em todas as direções, mas um quadrado por vez";
    case "rainha":
      return "A Rainha se movimenta em todas as direções";
    case "bispo":
      return "O Bispo se movimenta em diagonal";
    case "torre":
      return "A Torre se movimenta em cruz";
    case "cavalo":
      return "O Cavalo se movimenta em L";
    case "peão":
      return "O Peão se movimenta apenas para frente e come na diagonal";
    default:
      return "Peça desconhecida";
  }
}

console.log(chessPiece("Rainha"));

// 7 - Escreva um programa que converte uma nota dada em porcentagem
// (de 0 a 100) em conceitos de A a F. Siga essas regras:

function convertNote(percent) {
  let note = "";
  if (percent < 0 || percent > 100) {
    note = "error";
  } else if (percent >= 90) {
    note = "A";
  } else if (percent >= 80) {
    note = "B";
  } else if (percent >= 70) {
    note = "C";
  } else if (percent >= 60) {
    note = "D";
  } else if (percent >= 50) {
    note = "E";
  } else if (percent < 50) {
    note = "F";
  }
  return note;
}

for (let index = 50; index <= 100; index += 5) {
  console.log(index, convertNote(index));
}

// 8 - Escreva um programa que defina três números em constantes
// e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .
function testPar(numA, numB, numC) {
  // if (numA % 2 === 0 || numB % 2 === 0 || numC % 2 === 0) {
  //   return true;
  // }
  // return false;
  return numA % 2 === 0 || numB % 2 === 0 || numC % 2 === 0;
}
console.log(testPar(33, 45, 55));

// 9 - Escreva um programa que defina três números em constantes e retorne true
// se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .

function testImpar(numE, numF, numG) {
  // if (numE % 2 !== 0 || numF % 2 !== 0 || numG % 2 !== 0) {
  //   return true;
  // }
  // return false;
  return numE % 2 !== 0 || numF % 2 !== 0 || numG % 2 !== 0;
}
console.log(testImpar(36, 46, 55));

// 10 - Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

// 4.3
// 1- Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
// 2- Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// 3- Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
function arrRun(num) {
  for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
  }
  return num;
}
arrRun(numbers);

function arrSum(num) {
  let aux = num[0];
  for (let i = 0; i < num.length; i++) {
    aux += num[i];
  }
  return aux;
}
console.log(arrSum(numbers));

function calcMed(sum) {
  let aux = sum[0];
  for (let i = 0; i < sum.length; i++) {
    aux += sum[i];
  }
  return aux / sum.length;
}

console.log(calcMed(numbers));
// 4- Com o mesmo código do exercício anterior, caso o valor final seja
// maior que 20, imprima a mensagem: "valor maior que 20".
//  Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
function maiorQue(media) {
  if (media > 20) {
    return "valor maior que 20";
  }
  return "valor menor ou igual a 20";
}
console.log(maiorQue(calcMed(numbers)));

// 5- Utilizando for , descubra qual o maior valor contido no array e imprima-o;
// 6- Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
// 7- Utilizando for , descubra qual o menor valor contido no array e imprima-o;
// 8- Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
// 9- Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
function whoIsBig(num) {
  let aux = num[0];
  for (let i = 0; i < num.length; i++) {
    if (num[i] > aux) {
      aux = num[i];
    }
  }
  return aux;
}

console.log(whoIsBig(numbers));

function contImpar(num) {
  let count = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 != 0) {
      count++;
    } else if (num[i]) {
      return "nenhum valor ímpar encontrado";
    }
  }
  return count;
}

console.log(contImpar(numbers));

function whoIsSmall(num) {
  let aux = num[0];
  for (let i = 0; i < num.length; i++) {
    if (num[i] < aux) {
      aux = num[i];
    }
  }
  return aux;
}

console.log(whoIsSmall(numbers));

function count(num) {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
  return num;
}

count(25);

function divCount(num) {
  let aux = [];
  for (let i = 0; i < num.length; i++) {
    aux.push(num[i] / 2);
  }
  return aux;
}
console.log(divCount(numbers).join(""));

let n = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function organizationCres(num) {
  for (let i = 1; i < num.length; i++) {
    for (let j = 0; j < i; j++) {
      if (num[i] < num[j]) {
        let aux = num[i];
        num[i] = num[j];
        num[j] = aux;
      }
    }
  }
  return num;
}
console.log(organizationCres(n));

function organizationCres2(num) {
  for (let i = 1; i < num.length; i++) {
    for (let j = 0; j < i; j++) {
      if (num[i] > num[j]) {
        let aux = num[i];
        num[i] = num[j];
        num[j] = aux;
      }
    }
  }
  return num;
}

console.log(organizationCres2(n));

function mulCount(num) {
  let arrAux = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] === num[num.length - 1]) {
      arrAux.push(num[i] * 2);
    } else {
      arrAux.push(num[i] * num[i + 1]);
    }
  }
  return arrAux;
}

console.log(mulCount(organizationCres(n)));

// 1 -  O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.

function fatorial(numbers) {
  let aux = numbers;
  for (let i = 1; i <= numbers; i += 1) {
    aux *= i;
  }
  return aux;
}
console.log(fatorial(10));

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo,
// a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
function inverWord(word) {
  return word.split().reverse();
}
console.log(inverWord("trybe"));
