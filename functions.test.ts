const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('check if shuffleArray() returns an array', () => {
        expect(typeof shuffleArray([1, 2, 3, 4])).toBe('array')
    })

    test('return array the same length', () => {
        let arr = [1, 2, 3, 4]
        let shuffledArr = shuffleArray(arr)
        expect(shuffledArr).toHaveLength(arr.length)
    })
})