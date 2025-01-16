// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.copy()', () => {
  it('should return a new Dictionary', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const copy = dictionary.copy()
    expect(copy).instanceOf(Dictionary)
    expect(copy).not.toBe(dictionary)

  })
  it('should return a new Dictionary with exactly the same entries', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const copy = dictionary.copy()
    expect(copy.record()).toStrictEqual(dictionary.record())

  })
})
