//O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.
//Por exemplo: O fatorial é representado pelo sinal !
//4! = 4 x 3 x 2 x 1 = 24
//Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

//variável para armazenar o número a ser fatorado
let fatorial = 10;
//variável que irá armazenar o calculo
let resultado = fatorial;
//for para percorrer o valor de 1 ao número que será fatorado (10)
for (var index = 1; index < fatorial; index += 1) {
  resultado *= index;
  //Pegamos o valor de fatoração, 10, e multiplicamos pelo valor do indice atual
  // 10 * 1/ 10 * 2/ 20 * 3...
}
console.log(resultado);
//Podemos utilizar a própria variável fatorial para fazer o calculo, mas teriamos que tirar ela
//da condicional de controle, pois jamais terminaria o loop
//sendo assim precisando de uma segunda variável

//Agora, desenvolva um algoritmo que é capaz de inverter uma palavra.
// Por exemplo, a palavra "banana" seria invertida para "ananab".
// Utilize a string abaixo como exemplo, depois troque por outras para
// verificar se seu algoritmo está funcionando corretamente.

//variável ex:
let word = "tryber";

//variável do tipo string para receber a palavra invertida
let inverseWord = "";

//for para percorrer a palavra
for (let index = 0; index < word.length; index += 1) {
  //var concatenando as letras
  //sendo, acessando a posição de cada letra definindo pelo calculo
  //array[comprimento - 1 - index] = word [5] - 1 - 0 =
  inverseWord += word[word.length - 1 - index];
}
console.log(inverseWord);
//outra maneira
// for (let index = word.length - 1; index >= 0; index -= 1) {
//   inverseWord += word[index];
// }
// console.log("");
// console.log(inverseWord);
//Considerando a array:
let array = ["java", "javascript", "python", "html", "css"];

//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor.
//Considere o número de caracteres de cada palavra.

//Criamos as variáveis que receberão a maior e a menor palavra
let bigWord = array[0];
let smallWord = array[0];
//Atribuindo os primeiros indices para comparação

//For para percorrer cada indice
for (let index = 0; index < array.length; index += 1) {
  //se o elemento index de array for maior que o valor da variável
  if (array[index].length > bigWord.length) {
    bigWord = array[index];
    //substitua pela maior
  } else if (array[index].length < smallWord.length) {
    //Se o elemento index da array for menor que o valor da variável
    smallWord = array[index];
    //substitua pela menor
  }
}
console.log("A maior palavra será: ", bigWord);
console.log("A menor palavra será: ", smallWord);

//Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um
//algoritmo que retorne o maior número primo entre 0 e 50.

//variável para receber os valores que são n primos
let bigPrimo = [];
//Valor de controle para a conta
let count = 50;
//For para percorrer e poder verificar e comprar os n primos
for (let index = 0; index <= count; index += 1) {
  //Variável que irá fazer a divisão com o index
  //separando os n primos dos demais
  let divisor;
  //variável para percorrer essa divisão (cortando 0 e 1 pois não são primos)
  for (divisor = 2; divisor < index; divisor += 1) {
    //Se o módulo de index por divisor for igual a zero: pare
    if (index % divisor === 0) {
      break;
    }
  }
  //E antesq que o for termine nós fazemos outra condição que seja
  //se o valor de divisor for igual ao index ele é um numero primo
  //(pois se ele não tiver módulo em 1 e for igual, quer dizer que ele
  // só é divisivel por 1 e por ele mesmo)
  if (divisor === index) {
    bigPrimo.push(index);
  }
}
console.log(bigPrimo[bigPrimo.length - 1]);
