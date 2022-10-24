
const {myFizzBuzz} = require('./script');

describe('testa funcao myFizzBuzz', () => {
    it('Verifica se o numero é divisivel por 3 e 5', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });
    it('Verifica se o numero é divisivel por 3', () => {
        expect(myFizzBuzz(9)).toBe('fizz');
    });
    it('Verifica se o numero é divisivel por 5', () => {
        expect(myFizzBuzz(10)).toBe('buzz');
    });
    it('Verifica se o numero nao é divisivel por 3 nem por 5', () => {
        expect(myFizzBuzz(7)).toBe(7);
    });
    it('Verifica se o parametro é um numero', () => {
        expect(myFizzBuzz('7')).not.toBeTruthy();
    });

});
