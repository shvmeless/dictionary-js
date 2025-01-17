// IMPORTS
import { describe, it, expect } from 'vitest'
import { Dictionary } from '../../src'

// TESTS
describe('Dictionary.forEach()', () => {
  it('should iterate over each entry', () => {

    const dictionary = new Dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 })

    const result: Array<[string, number]> = []
    dictionary.forEach((value, key) => {
      result.push([key, value])
    })

    expect(result).toStrictEqual([['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]])

  })
})
