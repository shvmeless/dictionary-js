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
  it('should provide the dictionary in callback function', () => {

    let original: Record<string, number> | null = null
    dictionary({ a: 1, b: 2, c: 3, d: 4, e: 5 }).forEach((value, key, dictionary) => {
      if (original === null) original = dictionary
      expect(original).toBe(dictionary)
    })

  })
})
