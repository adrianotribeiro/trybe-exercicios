//Operações
const a = 1;
const b = 1;
let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a + b;
let modulo = a % b;

console.log(
  "Resultado da soma dos valres: Adição: " +
    adicao +
    "; Subtração: " +
    subtracao +
    "; Multiplicação: " +
    multiplicacao +
    "; Divisão: " +
    divisao +
    "; e Módulo: " +
    modulo
);
console.log(" ");

if (a > b) {
  console.log("O maior valor é: " + a);
} else if (b > a) {
  console.log("O maior valor é: " + b);
} else {
  console.log(
    "Ou os valores são iguais entre sí ou não há dados suficiente para comparação"
  );
}

console.log(" ");
const c = 2;
if (a > b && a > c) {
  console.log(a + " é o maior número");
} else if (b > a && b > c) {
  console.log(b + " é o maior número");
} else if (c > a && c > b) {
  console.log(c + " é o maior número");
} else {
  console.log(
    "Ou os valores são iguais entre sí ou não há dados suficiente para comparação"
  );
}

console.log(" ");

const nVerification = -16;

if (nVerification >= 0) {
  console.log("positive");
} else if (nVerification < 0) {
  console.log("negative");
} else {
  console.log("zero");
}

console.log(" ");

//180 sempre
const ladoA = 50;
const ladoB = 60;
const ladoC = -120;
const somaT = ladoA + ladoB + ladoC;

if (somaT === 180) {
  console.log("True");
} else if (somaT < 180 && somaT > 0) {
  console.log("False");
} else if (somaT < 0) {
  console.log("Error");
}

console.log(" ");

const peca = "BISPO";
let conversao = peca.toLowerCase();
switch (conversao) {
  case "peão":
    console.log("frente e diagonal");
    break;
  case "cavalo":
    console.log("em L");
    break;
  case "bispo":
    console.log("diagonal");
    break;
  case "torre":
    console.log("em cruz");
    break;
  case "rainha":
    console.log("todos os lados");
    break;
  case "rei":
    console.log("todas as direções, mas um quadrado por vez");
    break;
  default:
    console.log("Peça inexistente");
}

console.log(" ");

let porcentagem = 101;

if (porcentagem >= 90 && porcentagem < 100) {
  console.log("A");
} else if (porcentagem >= 80 && porcentagem < 100) {
  console.log("B");
} else if (porcentagem >= 70 && porcentagem < 100) {
  console.log("C");
} else if (porcentagem >= 60 && porcentagem < 100) {
  console.log("D");
} else if (porcentagem >= 50 && porcentagem < 100) {
  console.log("E");
} else if (porcentagem > 50 && porcentagem < 100) {
  console.log("F");
} else if (porcentagem < 0 || porcentagem > 100) {
  console.log("Error");
}

// switch (porcentagem) {
//   case porcentagem >= 90:
//     console.log("A");
//     break;
//   case porcentagem >= 80:
//     console.log("B");
//     break;
//   case porcentagem >= 70:
//     console.log("C");
//     break;
//   case porcentagem >= 60:
//     console.log("D");
//     break;
//   case porcentagem >= 50:
//     console.log("E");
//     break;
//   case porcentagem > 50:
//     console.log("F");
//     break;
//   case porcentagem < 0 || porcentagem > 100:
//     console.log("Error");
//     break;
//   default:
//     console.log("Valor inconsistente");
//     break;
// }
console.log(" ");

const g = 2;
const r = 4;
const j = 17;

if (g % 2 === 0 || r % 2 === 0 || j % 2 === 0) {
  console.log("true");
} else {
  console.log("false");
}

if (g % 2 !== 0 || r % 2 !== 0 || j % 2 !== 0) {
  console.log("true");
} else {
  console.log("false");
}

console.log("");

const custoProduto = 5;
const valorVenda = 10;

const valorCustoTotal = valor + impostoSobreProduto;
const lucro = valorVenda - valorCustoTotal;
