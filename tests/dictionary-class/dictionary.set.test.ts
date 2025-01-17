// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.set()', () => {
  it('should always return `this`', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const result = dictionary.set('x', 0)
    expect(result).toBe(dictionary)

  })
  it('should create a new entry if it does not already exists', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    dictionary.set('x', 0)
    dictionary.set('y', 0)
    dictionary.set('z', 0)

    expect(dictionary.record()).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5, x: 0, y: 0, z: 0 })

  })
  it('should overwrite the entry if it already exists', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    dictionary.set('a', 0)
    dictionary.set('c', 0)
    dictionary.set('e', 0)

    expect(dictionary.record()).toStrictEqual({ a: 0, b: 2, c: 0, d: 4, e: 0 })

  })
  it('should create/overwrite the entries as needed', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    dictionary.set('a', 0)
    dictionary.set('c', 0)
    dictionary.set('e', 0)
    dictionary.set('x', 0)
    dictionary.set('y', 0)

    expect(dictionary.record()).toStrictEqual({ a: 0, b: 2, c: 0, d: 4, e: 0, x: 0, y: 0 })

  })
})
