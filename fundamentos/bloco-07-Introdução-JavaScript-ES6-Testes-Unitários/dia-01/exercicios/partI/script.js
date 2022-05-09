function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); //Se necessário esta linha pode ser removida.
}

testingScope(true);

const testingScope2 = (escopo) => {
  if(escopo){
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
    console.log(ifScope);
  }else {
    const elseScope = `Não devo ser utilizada fora do meu escopo (else)`;
    console.log(elseScope);
  }
}

console.log(testingScope2(true));

// const testingScope3 = (escopo) =>{
//   return (escopo) ? `não devo ser utilizada fora do meu escopo (if) ` : `não devo ser utilizada fora do meu escopo(else)`
// }

// console.log(`${testingScope3(true)} ótimo, fui utilizada no escopo`);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

console.log(`Os valores em ordem serão: ${oddsAndEvens.sort()}`); // será necessário alterar essa linha 😉


//Crie uma função que receba um número e retorne seu fatorial.
//Na matemática, o fatorial de um número não negativo N, com a notação N!,
//é o produto de todos os inteiros menores ou iguais a N. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
const n = 4;
const refatorial = (num) =>{
  for (let i = 1; i < 4; i+=1) {
    num *= i;
  }
  return num;
}

const factorial = (num) => num > 1 ? num * factorial(num - 1) : 1
console.log(factorial(4));
