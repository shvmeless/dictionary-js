// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.includes()', () => {
  it('should return `false` when no parameters are provided', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result = dictionary.includes()
    expect(result).toStrictEqual(false)

  })
  it('should return `false` when at least one of the provided values is not present in the dictionary', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result = dictionary.includes(1, 3, 5, 0)
    expect(result).toStrictEqual(false)

  })
  it('should return `true` when all the provided values are present in the dictionary', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result = dictionary.includes(1, 3, 5)
    expect(result).toStrictEqual(true)

  })
})
