const {
  upperCase,
  getPokemonDetails,
  searchTerm,
  errorMessage,
} = require('../../dia-01/exercicios/script');

test('Verifica se o valor é convertido', (done) => {
  upperCase('aula', (upperCaseConvertation) => {
    try {
      expect(upperCaseConvertation).toBe('AULA');
      done();
    } catch (error) {
      done(error);
    }
  });
});

// Verifique se a importação do arquivo correto está sendo feita.

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (done) => {
    const callback = (error) => {
      expect(error).toBeTruthy();
      done();
    };
    getPokemonDetails(searchTerm('ability', 'chakaka'), callback);
  });

  it('retorna um pokemon que existe no banco de dados', (done) => {
    const callback = (error) => {
      expect(error).toBeFalsy();
      done();
    };

    getPokemonDetails(searchTerm('name', 'Squirtle'), callback);
  });
});
