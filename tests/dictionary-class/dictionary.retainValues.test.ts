// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.retainValues()', () => {
  it('should return `this` always', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result = dictionary.retainValues()
    expect(result).toBe(dictionary)

  })
  it('should do anything when no values are provided', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result = dictionary.retainValues()
    expect(result.record()).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })

  })
  it('should retain only the specified values', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result = dictionary.retainValues(1, 3, 5)
    expect(result.record()).toStrictEqual({ a: 1, c: 3, e: 5 })

  })
  it('should ignore non-existent values', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result = dictionary.retainValues(1, 3, 5, 0)
    expect(result.record()).toStrictEqual({ a: 1, c: 3, e: 5 })

  })
})
