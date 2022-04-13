//Parte I - Objetos e For/In

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "sim",
};

//1 - Imprima no console uma mensagem de boas-vindas para a personagem acima,
//incluindo seu nome. Valor esperado no console:
//Bem-vinda, Margarida
console.log("Bem-vinda, ", info.personagem);

//2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente'
//e o valor 'Sim' e, em seguida, imprima o objeto no console.
//Valor esperado no console:
// info["recorrente"] = "sim";
// console.table(info);
console.log("");
//3 - Faça um for/in que mostre todas as chaves do objeto.
//Valor esperado no console:

for (let key in info) {
  console.log(key);
}
console.log("");
//4 - Faça um novo for/in , mas agora mostre todos os
//valores das chaves do objeto. Valor esperado no console:
for (let key in info) {
  console.log(info[key]);
}
console.log("");
/*
Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves)
do primeiro e os seguintes valores: 'Tio Patinhas',
'Christmas on Bear Mountain, Dell's Four Color Comics #178',
'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada
objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
*/
let secondInfo = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "sim",
};

console.log(info.personagem + " e " + secondInfo.personagem);
console.log(info.origem + " e " + secondInfo.origem);
console.log(info.nota + " e " + secondInfo.nota);
if (info.recorrente === secondInfo.recorrente) {
  console.log("Ambos recorrentes");
} else if (info.recorrente === "sim" && secondInfo === "não") {
  console.log("Apenas ", info.personagem, " é uma personagem recorrente");
} else if (info.recorrente === "não" && secondInfo === "sim") {
  console.log("Apenas ", secondInfo.personagem, " é um personagem recorrente");
} else {
  console.log("Ambos são personagens não recorrentes");
}

//Usando o objeto abaixo, faça os exercícios a seguir:
let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
  ],
};
//6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da
//chave livrosFavoritos , e faça um console.log no seguinte formato:
//"O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
console.log(
  "O livro de",
  leitor.nome,
  leitor.sobrenome,
  "se chama",
  leitor.livrosFavoritos["0"].titulo
);
//7 - Adicione um novo livro favorito na chave livrosFavoritos , que é um array .
//Atribua a esta chave um objeto contendo as seguintes informações:
// {
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
// }
leitor.livrosFavoritos.push({
  titulo: "Harry Potter e o Prisioneiro de Azkaban",
  autor: "JK Rowling",
  editora: "Rocco",
});
console.log(
  "Julia tem 2 livros favoritos:",
  leitor.livrosFavoritos[0].titulo,
  "e",
  leitor.livrosFavoritos[1].titulo
);
//Função
//Crie uma função que receba uma string e
//retorne true se for um palíndromo , ou false , se não for.
function palindromoVerification(word) {
  let inverseWord = "";
  for (let index = 0; index < word.length; index += 1) {
    inverseWord += word[word.length - 1 - index];
  }
  if (word.toLowerCase() === inverseWord.toLowerCase()) {
    return true;
  } else {
    return false;
  }

  //   return word === word.split().reverse().join();
  // pega uma string converte em array, inverte array e transforma em string novamente com join
}
let w = "Arara";
console.log(palindromoVerification(w));
console.log("");
//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function arrMaior(containerTeste) {
  let aux = 0;
  for (let index = 0; index < containerTeste.length; index += 1) {
    if (containerTeste[index] > aux) {
      aux = containerTeste[index];
    }
  }
  return aux;
}

arrTeste = [2, 3, 6, 7, 10, 1];
console.log(arrMaior(arrTeste));

//  6- Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6.

function arrMenor(containerTeste) {
  let aux = containerTeste[0];
  for (let index = 0; index < containerTeste.length; index += 1) {
    if (containerTeste[index] < aux) {
      aux = index;
    }
  }
  return aux;
}
// let valores = [2, 4, 6, 7, 10, 0, -3];
console.log(arrMenor([2, 4, 6, 7, 10, 0, -3]));

console.log(" ");

//4 - Crie uma função que receba um array de nomes e
//retorne o nome com a maior quantidade de caracteres.

function contadorNomes(nomes) {
  let aux = nomes[0];
  for (let index = 0; index < nomes.length; index += 1) {
    if (nomes[index].length > aux.length) {
      aux = nomes[index];
    }
  }
  return aux;
}

let arrNomes = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];
console.log(contadorNomes(arrNomes));

console.log("");

function numCount(num) {
  let aux = num[0];
  let auxCount = 0;
  for (let index = 0; index < num.length; index += 1) {
    if (num[index] === auxCount) {
      auxCount += 1;
    }
  }
  return aux;
}
numTest = [2, 3, 2, 5, 8, 2, 3];
console.log(numCount(numTest));
console.log("");

//6 - Crie uma função que receba um número natural
// (número inteiro não negativo) N e retorne o somatório
//de todos os números de 1 até N.

function somatoria(num) {
  let aux = 0;
  for (let index = 0; index <= num; index += 1) {
    aux += index;
  }
  return aux;
}

let number = 5;
console.log(somatoria(number));

//7 - Crie uma função que receba uma string word e outra string ending .
//Verifique se a string ending é o final da string word .
//Considere que a string ending sempre será menor que a string word .

//função
function verificaFimPalavra(palavra, fimPalavra) {
  //variáveis para armazenar cada caracter
  palavra = palavra.split(""); //divide os caracteres e os transforma em uma array
  fimPalavra = fimPalavra.split("");
  controle = true; //variável que retornará se as palavras coecidem e devemos sempre passar um valor

  //for para percorrer a string/array
  for (let index = 0; index < fimPalavra.length; index += 1) {
    if (
      //     comprimento  -  comprimento    +  0    difd  indice da array
      palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]
    ) {
      //o calculo é baseado para pegarmos sempre o "meio da array"
      //sendo assim, trybe = 5 - 2 - 0 = b / != index 0 = b na primeira passada

      return false;
    }
  }
  return controle;
}
let wordA = "trybe";
let wordB = "be";
console.log(verificaFimPalavra(wordA, wordB));

//1 - (Difícil) Faça um programa que receba uma
//string em algarismos romanos e retorne o número que a string representa.

let numerosRomanos = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000,
};

function romanoParaDecimal(numero) {
  numero = numero.toLowerCase(); //Determina que qualquer valor passado será letra minuscula
  const len = numero.length;
  let soma = numerosRomanos[numero[len - 1]];
  let atual = numerosRomanos[numero[len - 1]];
  for (let i = 2; i <= len; i += 1) {
    const prox = numerosRomanos[numero[len - i]];
    if (atual <= prox) {
      soma += prox;
    } else {
      soma -= prox;
    }
    atual = prox;
  }
  return soma;
}
console.log(romanoParaDecimal("MMXVIII")); // 2018
console.log(romanoParaDecimal("VI")); // 6
console.log(romanoParaDecimal("IV")); // 4

for (let i = 1; i <= 10; i += 1) {
  console.log(i);
}
