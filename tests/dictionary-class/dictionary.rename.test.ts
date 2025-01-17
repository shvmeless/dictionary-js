// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.rename()', () => {
  it('should always return `this`', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const result = dictionary.rename('a', 'x')
    expect(result).toBe(dictionary)

  })
  it('should do nothing if the specified key does not exist', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    dictionary.rename('j', 'x')
    dictionary.rename('k', 'y')
    dictionary.rename('l', 'z')

    expect(dictionary.record()).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })

  })
  it('should rename the entry if the new key does not exist', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    dictionary.rename('a', 'x')
    dictionary.rename('c', 'y')
    dictionary.rename('e', 'z')

    expect(dictionary.record()).toStrictEqual({ x: 1, b: 2, y: 3, d: 4, z: 5 })

  })
  it('should overwrite the entry if the new key already exists', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    dictionary.rename('a', 'e')
    dictionary.rename('c', 'a')
    dictionary.rename('e', 'c')

    expect(dictionary.record()).toStrictEqual({ c: 1, b: 2, a: 3, d: 4 })

  })
})
