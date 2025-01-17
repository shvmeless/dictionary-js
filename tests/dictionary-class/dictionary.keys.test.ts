// IMPORTS
import { describe, expect, it } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.keys()', () => {
  it('should return an empty array if the Dictionary is empty', () => {

    const dictionary = new Dictionary()

    const result = dictionary.keys()
    expect(result).toStrictEqual([])

  })
  it('should return an array with all current keys', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const result = dictionary.keys()
    expect(result).toStrictEqual(['a', 'b', 'c', 'd', 'e'])

  })
  it('should return a unique array for each call', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const a = dictionary.keys()
    const b = dictionary.keys()
    expect(a).not.toBe(b)

  })
})
