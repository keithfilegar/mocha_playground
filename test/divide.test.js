const divide = require('../index');
const chai = require('chai') //also works to remove line 3 and add '.expext' to end of this statement
const expect = chai.expect;

describe('Divide function', () => {
    it('should divide positive integers correctly', () => {
        const a = 8;
        const b = 4;
        const expectedAnswer = 2;

        const actualAnswer = divide(a, b);

        expect(actualAnswer).to.equal(expectedAnswer);

        //all of the above can be condensed to expect(divide)
    });

    it('should throw an error when divided by zero', () => {
        const a =8, b =0;

        const fn = () => {
            divide(a, b)
        }

        expect(fn).to.throw();

    });
});