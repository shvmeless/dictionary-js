// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.values()', () => {
  it('should return an empty array when the dictionary is empty', () => {

    const dictionary = new Dictionary()

    const result = dictionary.values()
    expect(result).toStrictEqual([])

  })
  it('should return an array containing all current dictionary values', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result = dictionary.values()
    expect(result).toStrictEqual([1, 2, 3, 4, 5])

  })
  it('should return a different array each time it is called', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    const result1 = dictionary.values()
    const result2 = dictionary.values()
    expect(result1).not.toBe(result2)

  })
})
