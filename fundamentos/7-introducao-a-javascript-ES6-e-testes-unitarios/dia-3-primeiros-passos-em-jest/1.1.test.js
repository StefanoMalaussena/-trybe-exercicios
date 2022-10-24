
const {sum} = require('./script')

describe('teste da funcao sum', () => {
    it('testa somas da funcao sum', () => {
        expect(sum(4, 5)).toBe(9);
        expect(sum(0, 0)).toBe(0);
    });
    it('tratamento de erro funcao sum', () => {
        expect(() => sum(4, '5')).toThrowError();
        expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
    });
});

