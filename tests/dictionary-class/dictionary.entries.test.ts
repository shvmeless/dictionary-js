// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.entries()', () => {
  it('should return an empty array when the dictionary is empty', () => {

    const dictionary = new Dictionary()

    const result = dictionary.entries()
    expect(result).toStrictEqual([])

  })
  it('should return an array containing all current dictionary entries', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result = dictionary.entries()
    expect(result).toStrictEqual([['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]])

  })
  it('should return a different array each time it is called', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    const result1 = dictionary.entries()
    const result2 = dictionary.entries()
    expect(result1).not.toBe(result2)

  })
})
