// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.delete()', () => {
  it('should return `this` always', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result = dictionary.delete()
    expect(result).toBe(dictionary)

  })
  it('should do anything when no keys are provided', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result = dictionary.delete()
    expect(result.record()).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })

  })
  it('should delete the specified keys', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result = dictionary.delete('a', 'c', 'e')
    expect(result.record()).toStrictEqual({ b: 2, d: 4 })

  })
  it('should ignore non-existent keys', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result = dictionary.delete('a', 'c', 'e', 'x')
    expect(result.record()).toStrictEqual({ b: 2, d: 4 })

  })
})
