// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.record()', () => {
  it('should return an empty record when the dictionary is empty', () => {

    const dictionary = new Dictionary()

    const result = dictionary.record()
    expect(result).toStrictEqual({})

  })
  it('should return a record containing all current dictionary entries', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    dictionary.set('d', 4)
    dictionary.set('e', 5)

    const result = dictionary.record()
    expect(result).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })

  })
  it('should return a different record each time it is called', () => {

    const object = { a: 1, b: 2, c: 3 }
    const dictionary = new Dictionary(object)

    const result1 = dictionary.record()
    const result2 = dictionary.record()
    expect(result1).not.toBe(result2)

  })
})
