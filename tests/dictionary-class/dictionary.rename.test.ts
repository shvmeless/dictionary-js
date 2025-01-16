// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.rename()', () => {
  it('should return `this` always.', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    const result = dictionary.rename('a', 'x')
    expect(result).toBe(dictionary)

  })
  it('should not do anything when the given key does not exists.', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.rename('j', 'x')
    dictionary.rename('k', 'y')
    dictionary.rename('l', 'z')

    expect(dictionary.record()).toStrictEqual({ a: 1, b: 2, c: 3 })

  })
  it('should rename the entry when the given key does not exists in the dictionary.', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.rename('a', 'x')
    dictionary.rename('b', 'y')
    dictionary.rename('c', 'z')

    expect(dictionary.record()).toStrictEqual({ x: 1, y: 2, z: 3 })

  })
  it('should overwrite the entry when the given key exists in the dictionary.', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.rename('a', 'c')
    dictionary.rename('b', 'a')
    dictionary.rename('c', 'b')

    expect(dictionary.record()).toStrictEqual({ b: 1, a: 2 })

  })
})
