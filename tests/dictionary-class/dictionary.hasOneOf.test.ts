// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.hasOneOf()', () => {
  it('should return `false` when no parameters are provided', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result = dictionary.hasOneOf()
    expect(result).toStrictEqual(false)

  })
  it('should return `false` when none of the provided keys are present in the dictionary', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result = dictionary.hasOneOf('x', 'y', 'z')
    expect(result).toStrictEqual(false)

  })
  it('should return `true` when at least one of the provided keys is present in the dictionary', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result = dictionary.hasOneOf('a', 'e', 'x')
    expect(result).toStrictEqual(true)

  })
})
