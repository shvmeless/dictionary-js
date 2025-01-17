// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.every()', () => {
  it('should return `false` at least one entry does not satisfy the condition', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result = dictionary.every((value) => (value >= 2 && value <= 4))
    expect(result).toStrictEqual(false)

  })
  it('should return `true` when all entries satisfy the condition', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result = dictionary.every((value) => (value >= 1 && value <= 5))
    expect(result).toStrictEqual(true)

  })
})
