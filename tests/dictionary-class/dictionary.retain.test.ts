// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.retain()', () => {
  it('should return `this` always', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result = dictionary.retain()
    expect(result).toBe(dictionary)

  })
  it('should not do anything when no keys are provided', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result = dictionary.retain()
    expect(result.record()).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })

  })
  it('should remove all entries except the specified keys', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result = dictionary.retain('a', 'c', 'e')
    expect(result.record()).toStrictEqual({ a: 1, c: 3, e: 5 })

  })
  it('should ignore non-existent keys', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result = dictionary.retain('a', 'c', 'e', 'x')
    expect(result.record()).toStrictEqual({ a: 1, c: 3, e: 5 })

  })
})
