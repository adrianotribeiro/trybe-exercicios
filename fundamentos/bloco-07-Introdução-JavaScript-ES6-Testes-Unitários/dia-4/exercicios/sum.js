
const verifyTypeOfValue = (a, b) => {
  if(typeof a !== 'number' || typeof b !== 'number'){
    throw new Error('parameters must be numbers');
  }
}
//Verifica se o tipo do valor é numérico

const sum = (a, b) => {
  try{
    verifyTypeOfValue(a, b);
    return a + b;
    //Se os valores forem do tipo numérico ele executa a função de soma
  } catch(error) {
    throw error.message;
    //do contrário ele captura e executa a mensagem de erro
  }
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

//encode

// const encode = (param) => {
//   let aux = [];
//   for (let index = 0; index < param.length; index += 1) {
//     if (param[index] === 'a') {
//       aux.push(1);
//     } else if (param[index] === 'e') {
//       aux.push(2);
//     } else if (param[index] === 'i') {
//       aux.push(3);
//     } else if (param[index] === 'o') {
//       aux.push(4);
//     } else if (param[index] === 'u') {
//       aux.push(5);
//     } else {
//       aux.push(param[index]);
//     }
//   }
//   return aux.join('');
// }

const encode = (param) => {
  const vogais =['a','e','i','o','u'];
  const aux = [];
  for (let i = 0; i < param.length; i+=1) {
    if(vogais.includes(param[i])){
      aux.push(vogais.indexOf(param[i]) + 1);
    }else{
      aux.push(param[i]);
    }
  }
  return aux.join('');
}
const decode = (param) => {
  const num = ['1', '2', '3', '4', '5'];
  const vogais =['a','e','i','o','u'];
  const aux = [];
  for (let i = 0; i < param.length; i++) {
    if(num.includes(param[i])){
      //p3nd1m4nh1ng1b1
      aux.push(vogais[i]);
    }else{
      //p
      aux.push(param[i]);
    }
  }
  return aux.join('');
}

// const decode = (param) => {
//   let aux = [];
//   for (let index = 0; index < param.length; index += 1) {
//     if (param[index] === '1') {
//       aux.push('a');
//     } else if (param[index] === '2') {
//       aux.push('e');
//     } else if (param[index] === '3') {
//       aux.push('i');
//     } else if (param[index] === '4') {
//       aux.push('o');
//     } else if (param[index] === '5') {
//       aux.push('u');
//     } else {
//       aux.push(param[index]);
//     }
//   }
//   return aux.join('');
// }
module.exports = {sum, myRemove, myFizzBuzz, encode, decode};
