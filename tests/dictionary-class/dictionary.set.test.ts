// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.set()', () => {
  it('should return `this` always', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    const result = dictionary.set('d', 4)
    expect(result).toBe(dictionary)

  })
  it('should add a new entry to the dictionary when the key does not exist', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    expect(dictionary.record()).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })

  })
  it('should overwrite an existing entry in the dictionary when the key exists', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('a', 0)
    dictionary.set('b', 0)
    dictionary.set('c', 0)

    expect(dictionary.record()).toStrictEqual({ a: 0, b: 0, c: 0 })

  })
})
