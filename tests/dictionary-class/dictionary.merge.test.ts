// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.merge()', () => {
  it('should return `this` always', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const input = { x: 0, y: 0, z: 0 }
    const result = dictionary.merge(input)
    expect(result).toBe(dictionary)

  })
  it('should insert the new entries', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const input = { x: 0, y: 0, z: 0 }
    dictionary.merge(input)

    expect(dictionary.record()).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5, x: 0, y: 0, z: 0 })

  })
  it('should overwrite values for duplicated keys', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const input = { a: 0, c: 0, e: 0 }
    dictionary.merge(input)

    expect(dictionary.record()).toStrictEqual({ a: 0, b: 2, c: 0, d: 4, e: 0 })

  })
  it('should insert or overwrite values as needed', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const input = { a: 0, e: 0, x: 0 }
    dictionary.merge(input)

    expect(dictionary.record()).toStrictEqual({ a: 0, b: 2, c: 3, d: 4, e: 0, x: 0 })

  })
  it('should accept instances of `Dictionary` as a parameter', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const input = new Dictionary({ a: 0, e: 0, x: 0 })
    dictionary.merge(input)

    expect(dictionary.record()).toStrictEqual({ a: 0, b: 2, c: 3, d: 4, e: 0, x: 0 })

  })
  it('should not modify the provided object', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const input = { a: 0, e: 0, x: 0 }
    dictionary.merge(input)

    expect(input).toStrictEqual({ a: 0, e: 0, x: 0 })

  })
})
