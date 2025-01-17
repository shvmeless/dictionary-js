// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.some()', () => {
  it('should return `false` when no entry satisfies the condition', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result = dictionary.some((value) => (value <= 0))
    expect(result).toStrictEqual(false)

  })
  it('should return `true` when at least one entry satisfies the condition', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result = dictionary.some((value) => (value % 2 === 0))
    expect(result).toStrictEqual(true)

  })
})
