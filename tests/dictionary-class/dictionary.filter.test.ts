// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.filter()', () => {
  it('should remove all entries that do not satisfy the condition', () => {

    const object: Record<string, number> = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result = dictionary.filter((value) => (value >= 2 && value <= 4))
    expect(result.record()).toStrictEqual({ b: 2, c: 3, d: 4 })

  })
})
