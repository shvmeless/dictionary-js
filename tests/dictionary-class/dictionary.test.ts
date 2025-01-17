// IMPORTS
import { describe, expect, it } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('new Dictionary()', () => {
  it('should create an empty Dictionary if no argument is provided', () => {

    const dictionary = new Dictionary()

    const result = dictionary.record()
    expect(result).toStrictEqual({})

  })
  it('should initialize the Dictionary with entries from the provided record', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const result = dictionary.record()
    expect(result).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })

  })
  it('should initialize the Dictionary with entries from the provided array', () => {

    const array: Array<[string, number]> = [['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]]
    const dictionary = new Dictionary(array)

    const result = dictionary.record()
    expect(result).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })

  })
})
