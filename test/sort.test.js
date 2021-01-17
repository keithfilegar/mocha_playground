const sort = require('../sort');
const expect = require('chai').expect

describe('Sort function', () => {
    it('should sort an array of numbers in ascending order', () => {
        const arr1 = [10, 31, 1, 22, 3]
        const arr2 = [1, 3, 10, 22, 31]

        expect(sort(arr1)).to.deep.equal(arr2)
    })

    // it('should sort an array of numbers in ascending order if there are negative values', () => {
    //     const arr1 = [-10, 31, 1, 22, 3]
    //     const arr2 = [1, 3, -10, 22, 31]

    //     expect(sort(arr1)).to.deep.equal(arr2)
    // })
})