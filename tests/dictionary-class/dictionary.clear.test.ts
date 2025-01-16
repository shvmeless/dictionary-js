// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.clear()', () => {
  it('should return `this` always', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result = dictionary.clear()
    expect(result).toBe(dictionary)

  })
  it('should remove all the entries', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    dictionary.clear()
    expect(dictionary.record()).toStrictEqual({})

  })
})
