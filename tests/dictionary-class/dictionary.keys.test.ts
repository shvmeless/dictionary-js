// IMPORTS
import { describe, expect, it } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.keys()', () => {
  it('should return an empty array when the dictionary is empty', () => {

    const dictionary = new Dictionary()

    const result = dictionary.keys()
    expect(result).toStrictEqual([])

  })
  it('should return an array containing all current dictionary keys', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result = dictionary.keys()
    expect(result).toStrictEqual(['a', 'b', 'c', 'd', 'e'])

  })
  it('should return a different array each time it is called', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    const result1 = dictionary.keys()
    const result2 = dictionary.keys()
    expect(result1).not.toBe(result2)

  })
})
