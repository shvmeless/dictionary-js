// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.find()', () => {
  it('should return `undefined` when no entry satisfies the condition', () => {

    const object: Record<string, number> = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result = dictionary.find((value) => (value < 0))
    expect(result).toBeUndefined()

  })
  it('should return the value of one of the entries that satisfies the condition', () => {

    const object: Record<string, number> = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result = dictionary.find((value) => (value >= 2 && value <= 4))
    expect(result).toStrictEqual(['b', 2])

  })
})
