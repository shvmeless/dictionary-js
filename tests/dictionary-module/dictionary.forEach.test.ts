// IMPORTS
import { describe, it, expect } from 'vitest'
import { dictionary } from '../../src'

// TESTS
describe('dictionary.forEach()', () => {
  it('should iterate over each entry', () => {

    const result: Array<[string, number]> = []
    dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).forEach((value, key) => {
      result.push([key, value])
    })

    expect(result).toStrictEqual([['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]])

  })
})
