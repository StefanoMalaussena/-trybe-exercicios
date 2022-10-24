

const {encode, decode} = require('./script');


describe('Verifica as funcoes encode e decode', () => {
    it('Verifica se encode e decode sao funcoes', () => {
        expect(typeof encode).toBe('function');
        expect(typeof decode).toBe('function');
    });
    it('Verifica se encode e decode substituem vogais por numeros corretamente', () => {
        expect(encode('ana')).toEqual('1n1');
        expect(decode('1n1')).toEqual('ana');
    });
    it('Verifica se as dmais letras e numeros retornam corretamente', () => {
        expect(encode('qwer')).toEqual('qw2r');
        expect(decode('qw2r')).toEqual('qwer');
    });
    it('Verifica se as strings que retornam tem o mesmo tamanho dos parametros', () => {
       expect(encode('xablau').length).toEqual(6);
    });
});

