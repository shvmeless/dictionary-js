// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.includesOneOf()', () => {
  it('should return `false` when no parameters are provided', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result = dictionary.includesOneOf()
    expect(result).toStrictEqual(false)

  })
  it('should return `false` when none of the provided values are present in the dictionary', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result = dictionary.includesOneOf(6, 7, 8, 9, 0)
    expect(result).toStrictEqual(false)

  })
  it('should return `true` when at least one of the provided values is present in the dictionary', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result = dictionary.includesOneOf(1, 3, 5, 6)
    expect(result).toStrictEqual(true)

  })
})
