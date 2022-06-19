const {sum, myRemove, myFizzBuzz, encode, decode} = require('./sum');

describe('Testes referentes a função sum', () => {
  test('Soma entre os valores 4 e 5 retorna 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('Se a soma dos valores 0 e 0 retorna 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('Se um dos valores for string("5") o programa lança um erro acusando', () => {
    expect(() => sum(4, '5')).toThrow('parameters must be numbers');
  })
})

describe ('Testes referentes a função myRemove', () => {
  test('Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', ()=>{
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('Verifica se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () =>{
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('Verifica se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
})

describe('Testes referentes a função myFizzBuzz', ()=> {
  test('Faça uma chamada com um número divisível por 3 e 5 e verifica se o retorno é o esperado', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  })
  test('Faça uma chamada com um número divisível por 3 e verifica se o retorno é o esperado', () => {
    expect(myFizzBuzz(9)).toEqual('fizz');
  })
  test('Faça uma chamada com um número divisível por 5 e verifica se o retorno é o esperado', () => {
    expect(myFizzBuzz(10)).toEqual('buzz');
  })
  test('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifica se o retorno é o esperado', () => {
    expect(myFizzBuzz(8)).toEqual(8);
  })
  test('Faça uma chamada com um parâmetro que não é um número e verifica se o retorno é o esperado', () => {
    expect(myFizzBuzz('b')).toBeFalsy();
  })
})

describe('Testes referentes a função encode e decode', () => {
  test('Verifica se as vogais são substituidas por 1, 2, 3, 4, 5', () => {
    expect(encode('aeiou')).toEqual('12345');
  });
  test('Verifica se os valores 1, 2, 3, 4, 5 são convertidos em vogais', () => {
    expect(decode('12345')).toEqual('aeiou');
  });
  test('Verifica se a palavra pindamonhangaba é convertida para p3nd1m4nh1ng1b1', () => {
    expect(encode('pindamonhangaba')).toEqual('p3nd1m4nh1ng1b1');
  });
  test('Vericia se a palavra p3nd1m4nh1ng1b1 é convertida e retorna pindamonhangaba', () => {
    expect(decode('p3nd1m4nh1ng1b1')).toEqual('pindamonhangaba');
  })
  test('Verifica se a palavra de entrada possui o mesmo tamanho que a de saída', () => {
    const wordLength = 'p3nd1m4nh1ng1b1';
    expect(encode('pindamonhangaba').length).toEqual(wordLength.length);
  })
})