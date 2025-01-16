// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.size()', () => {
  it('should return 0 when the dictionary is empty', () => {

    const dictionary = new Dictionary({})

    const result = dictionary.size()
    expect(result).toBe(0)

  })
  it('should return current number of entries in the dictionary', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result = dictionary.size()
    expect(result).toBe(5)

  })
})
