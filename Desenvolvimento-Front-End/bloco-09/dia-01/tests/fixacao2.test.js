// test('Não deveria passar!', (done) => {
//   setTimeout(() => {
//     try {
//       expect(10).toBe(5);
//       console.log('Deveria falhar!');
//       done();
//     } catch (error) {
//       done(error);
//     }
//   }, 500);
// });

beforeEach(() => {
  cities = ['Pinhamonhangaba'];
});

afterEach(() => {
  cities = [];
});
const asyncSum = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 500);
};

test('Testando asyncSum, soma 5 mais 10', (done) => {
  asyncSum(5, 10, (result) => {
    try {
      expect(result).toBe(16);
      done();
    } catch (error) {
      done(error);
    }
  });
});

let cities = [];
const addCity = (city) => {
  cities.push(city);
};
const removeCity = (city) => {
  cities = cities.filter((eachCity) => eachCity !== city);
};
describe('Sobre as funções da cidade', () => {
  test('Testa a função addCity', () => {
    expect.assertions(4);
    addCity('Campinas');
    addCity('Goiania');
    addCity('Recife');
    expect(cities).toHaveLength(3);
    expect(cities).toContain('Campinas');
    expect(cities).toContain('Goiania');
    expect(cities).toContain('Recife');
  });

  test('Testa a função removeCity', () => {
    expect.assertions(4);
    removeCity('Campinas');
    expect(cities).toHaveLength(2);
    expect(cities).not.toContain('Campinas');
    expect(cities).toContain('Goiania');
    expect(cities).toContain('Recife');
  });
});
