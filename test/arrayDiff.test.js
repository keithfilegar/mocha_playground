const expect = require('chai').expect;
const diff = require('../arrayDiff');

describe('Array diff', () => {
    it('Should return a if no common elements', () => {
        expect(diff([1,2,3], [4,5,6])).to.deep.equal([1,2,3])
    })

    it('Should return [] if arrays are the same', () => {
        expect(diff([1,2,3], [1,2,3])).to.deep.equal([])
    })

    it('Should return correctly if some elements re remved', () => {
        expect(diff([2,3,4], [3])).to.eql([2,4])
    })

    it('Should remove 1 from [1,2,3]', () => {
        expect(diff([1,2,3], [1])).to.not.include(1);
    })
})